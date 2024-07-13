import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      userId,
      productId,
      shares = 0,
      followers = 0,
      views = 0,
      loginsViews = 0,
      leads = 0,
      desktopViews,
      mobileViews,
      tabletViews,
      country: incomingCountry
    } = await request.json();

    // Fetch existing analytics record
    const existingAnalytics = await prisma.analytics.findUnique({
      where: { productId: productId },
    });

    // Define updated values conditionally
    const updatedShares = shares > 0 ? (existingAnalytics?.shares ?? 0) + shares : existingAnalytics?.shares ?? 0;
    const updatedFollowers = followers > 0 ? (existingAnalytics?.followers ?? 0) + followers : existingAnalytics?.followers ?? 0;
    const updatedViews = views > 0 ? (existingAnalytics?.views ?? 0) + views : existingAnalytics?.views ?? 0;
    const updatedLoginsViews = loginsViews > 0 ? (existingAnalytics?.loginsViews ?? 0) + loginsViews : existingAnalytics?.loginsViews ?? 0;
    const updatedLeads = leads > 0 ? (existingAnalytics?.leads ?? 0) + leads : existingAnalytics?.leads ?? 0;

    
        // Handle country updates
        let updatedCountry: Record<string, number> = existingAnalytics?.country as Record<string, number> || {};
        if (incomingCountry) {
          updatedCountry[incomingCountry] = (updatedCountry[incomingCountry] || 0) + 1;
        }

    const analytics = await prisma.analytics.upsert({
      where: {
        productId: productId,
      },
      update: {
        userId,
        shares: updatedShares,
        followers: updatedFollowers,
        views: updatedViews,
        loginsViews: updatedLoginsViews,
        leads: updatedLeads,
        desktopViews,
        mobileViews,
        tabletViews,
        country: updatedCountry
      },
      create: {
        userId,
        productId,
        shares: updatedShares,
        followers: updatedFollowers,
        views: updatedViews,
        loginsViews: updatedLoginsViews,
        leads: updatedLeads,
        desktopViews,
        mobileViews,
        tabletViews,
        country: updatedCountry
      }
    });

    return new Response(JSON.stringify(analytics), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to add analytics" }), { status: 500 });
  }
}

