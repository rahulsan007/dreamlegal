import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId) {
      return new Response(
        JSON.stringify({
          success: false,
          msg: "User ID is required",
        }),
        { status: 400 }
      );
    }

    const profile = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    const userProfile = await prisma.userAccount.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!userProfile) {
      return new Response(
        JSON.stringify({
          success: false,
          msg: "Profile not found",
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        profile: userProfile,
        account: profile,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Error fetching profile",
      }),
      { status: 500 }
    );
  }
}
