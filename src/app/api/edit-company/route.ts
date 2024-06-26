import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      vendorId,
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
    } = data;

    // Update the company info
    const updatedProfile = await prisma.companyInfo.update({
      where: { id: vendorId },
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

    return NextResponse.json({ success: true, profile: updatedProfile });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({
      success: false,
      msg: "Error updating profile.",
    });
  }
}
