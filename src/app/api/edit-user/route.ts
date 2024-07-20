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
      editing,
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

    if (editing) {
      // Update existing profile
      const getUser = await prisma.userAccount.findFirst({
        where: {
          userId: userId,
        },
      })
      const updatedProfile = await prisma.userAccount.update({
        where: {
          id: getUser?.id,
        },
        data: {
         
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
          msg: "Profile updated successfully",
          profile: updatedProfile,
        }),
        { status: 200 }
      );
    } else {
      // Create new user account
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

      if (logoPreview) {
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            image: logoPreview,
          },
        });
      }

      return new Response(
        JSON.stringify({
          success: true,
          msg: "Profile created successfully",
          profile: newProfile,
        }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Error processing request",
      }),
      { status: 500 }
    );
  }
}
