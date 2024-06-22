import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const {
    userId,
    prname,
    logoUrl,
    category,
    deployment,
    mobileAccessibility,
    adoptionPeriod,
    adoptionPeriodUnit,
    languages,
    securityCertificate,
    integrations,
  } = await request.json();

  if (!userId) {
    return new Response(
      JSON.stringify({ success: false, msg: "Missing required fields" }),
      { status: 400 }
    );
  }

  try {
    const findCompanyId = await prisma.companyInfo.findFirst({
      where: { userId },
    });

    if (!findCompanyId) {
      return new Response(
        JSON.stringify({ success: false, msg: "Profile not completed" }),
        { status: 404 }
      );
    }

    const avgTimeAdoption = adoptionPeriod + " " + adoptionPeriodUnit;

    // Convert mobileAccessibility to boolean
    const mobileAvailable = mobileAccessibility === "yes";

    const product = await prisma.product.create({
      data: {
        name: prname,
        logoUrl,
        category,
        deployement: deployment,
        mobileAvailable: mobileAvailable,
        avgTimeAdoption,
        languages,
        securityCertificate,
        integration: integrations,
        companyId: findCompanyId.id,
        userId,
        active: "draft",
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        msg: "Product created successfully",
        productId: product.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        msg: "Error creating product",
      }),
      { status: 500 }
    );
  }
}
