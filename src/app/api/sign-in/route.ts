import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user) {
    if (password && user.password !== password) {
      throw new Error("Invalid credentials"); // Throw an error for invalid password
    }
    // Exclude the password field from the response
    const { password: _, ...userData } = user;
    return new Response(
      JSON.stringify({
        success: true,
        msg: "User Match",
        user: userData, // Return the user object without the password
      }),
      { status: 200 }
    );
  } else {
    throw new Error("User not found"); // Throw an error for user not found
  }
}
