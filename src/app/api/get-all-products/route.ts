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
      },
    });

    const formattedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description
        ? product.description.substring(0, 100)
        : null, // Truncate description to 100 characters
      logourl: product.logoUrl,
      featured: product.featured,
      category: product.category,
    }));

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
        products: formattedProducts,
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
