import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      id,
      companyName,
      website,
      yearFounded,
      headQuaters,
      NameOfFounders,
      contact,
      vendorId,
      founderVision,
      regionServed,
      TeamSize,
      Awards,
      PointOfContactName,
      PointOfContactPhone,
      PointOfContactDesignation,
    } = await request.json();

    const getProfile = await prisma.companyInfo.findFirst({
      where: {
        userId: vendorId,
      },
    });

    const updatedProfile = await prisma.companyInfo.update({
      where: { id: getProfile?.id },
      data: {
        companyName,
        website,
        yearFounded,
        headQuaters,
        NameOfFounders,
        contact,
        founderVision,
        regionServed,
        TeamSize,
        Awards,
        PointOfContactName,
        PointOfContactPhone,
        PointOfContactDesignation,
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
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Error updating profile",
      }),
      { status: 500 }
    );
  }
}
