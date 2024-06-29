import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { productId } = await request.json();

    if (!productId) {
      return Response.json(
        {
          success: false,
          msg: "Please provide a product ID",
        },
        { status: 400 }
      );
    }

    // Fetch reviews for the given product ID
    const reviews = await prisma.review.findMany({
      where: { productId },
    });

    return Response.json(
      {
        success: true,
        msg: "Reviews fetched successfully",
        reviews,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
