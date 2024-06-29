import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { id } = await request.json();
  if (id) {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    const CompanyInfo = await prisma.companyInfo.findFirst({
      where: {
        id: product?.companyId,
      },
    });

    const userInfo = await prisma.user.findFirst({
      where: {
        id: product?.userId,
      },
      select: {
        name: true,
        email: true,
        image: true,
      },
    });
    if (product && CompanyInfo) {
      return Response.json(
        {
          msg: "Product fetched successfully",
          success: true,
          product,
          company: CompanyInfo,
          user: userInfo,
        },
        {
          status: 200,
        }
      );
    } else {
      return Response.json(
        {
          msg: "Product not found",
          success: true,
        },
        {
          status: 200,
        }
      );
    }
  } else {
    return Response.json(
      {
        msg: "Provide Product ID",
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
