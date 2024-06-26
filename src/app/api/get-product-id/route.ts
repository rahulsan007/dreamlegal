import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { id } = await request.json();
  if (id) {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (product) {
      return Response.json(
        {
          msg: "Product fetched successfully",
          success: true,
          product,
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
