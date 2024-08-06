import prisma from "@/lib/prisma";
import WelcomeEmail from "../../../../email/WelcomeEmail";
import { sendWelcomeEmail } from "@/app/(auth)/_helpers/sendWelcomEmail";

export async function POST(request: Request) {
  const { email, otp } = await request.json();

  // Verify the OTP in the Prisma Otp model
  const otpRecord = await prisma.otp.findFirst({
    where: {
      email,
    },

  });

  if (!otpRecord) {
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Invalid OTP",
      }),
      { status: 400 }
    );
  }

  if (otpRecord.otp !== otp) {
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Invalid OTP",
      }),
      { status: 400 }
    );
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // Delete the OTP from the Prisma Otp model
  await prisma.otp.deleteMany({
    where: {
      email,
    },
  });
 if(user?.name){
  await sendWelcomeEmail(user.email, user.name);
}
  
  return new Response(
    JSON.stringify({
      success: true,
      msg: "OTP verified successfully",
      user,
    }),
    { status: 200 }
  );
}
