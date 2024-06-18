import { sendVerificationEmail } from "@/app/(auth)/_helpers/sendVerificationEmail";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, password, type = "user" } = await request.json();

    // Create a new user in the Prisma User model
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // You should hash the password before storing it in a real application
        type,
      },
    });

    // Generate a 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log("OTP generated:", otp);

    // Store the OTP in the Prisma Otp model
    await prisma.otp.create({
      data: {
        email,
        otp,
      },
    });

    // Send the OTP via email
    await sendVerificationEmail(email, name, otp);

    return new Response(
      JSON.stringify({
        success: true,
        msg: "User created successfully. OTP sent to email.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Something went wrong",
      }),
      { status: 500 }
    );
  }
}
