import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      Contact,
      Location,
      Address,
      Designation,
      CompanyType,
      CompanyAddress,
      CompanyEmail,
      logoPreview,
      userId,
    } = await request.json();

    const existingProfile = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!existingProfile) {
      return new Response(
        JSON.stringify({
          success: false,
          msg: "Profile not found",
        }),
        { status: 404 }
      );
    }

    if (logoPreview) {
      const newProfile = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          image: logoPreview,
        },
      });
    }

    const newProfile = await prisma.userAccount.create({
      data: {
        userId: userId,
        Contact,
        Location,
        Address,
        Designation,
        CompanyType,
        CompanyAddress,
        CompanyEmail,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        msg: "Profile created successfully",
        profile: newProfile,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Error creating profile",
      }),
      { status: 500 }
    );
  }
}
