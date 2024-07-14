import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        logoUrl: true,
        featured: true,
        category: true,
        active: true,
      deployement: true,
      mobileAvailable: true,
      focusCountries: true,
      avgTimeAdoption: true,
      languages: true,
      securityCertificate: true,
      integration: true,
      usp: true,
      upcomingUpdates: true,
      userCategory: true,
      userCategoryPercentage: true,
      industry: true,
      industryPercentage: true,
      practiceAreas: true,
      practiceAreasPercentage: true,
      teamSize: true,
      teamsizePercentage: true,
      processLifecycle: true,
      features: true,
      freeTrial: true,
      timePeriod: true,
      freeVersion: true,
      pricingModel: true,
      contractPeriod: true,
      nameofPlan: true,
      validity: true,
      price: true,
      pricingParams: true,
      Demo: true,
      DemoNote: true,
      support: true,
      supportNote: true,
      training: true,
      trainingNote: true,
      storage: true,
      storageNote: true,
      fileSize: true,
      fileSizeNote: true,
      maintenance: true,
      maintenanceNote: true,
      reqForChange: true,
      reqForChangeNote: true,
      trainingReq: true,
      trainingReqNote: true,
      dataMigration: true,
      dataMigrationNote: true,
      Images: true,
      videoUrl: true,
      attachments: true,
      youtubeUrl: true,
      linkedinUrl: true,
      twitterUrl: true,
      instagramUrl: true,
      createdAt: true,
      updatedAt: true,
      user: true,
      company: true,
      Review: true,
      },
    });

    

    if (products === null) {
      return Response.json(
        {
          msg: "No products found.",
          success: true,
        },
        {
          status: 200,
        }
      );
    }

    return Response.json(
      {
        msg: "All Products fetched successfully",
        success: true,
        products,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        msg: "An error occurred while fetching the products.",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
