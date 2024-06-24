import { UploadImage } from "@/actions/UploadAction";
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
    focusCountries,
    securityCertificate,
    integrations,
    description,
    usp,
    upcomingUpdates,
    userCategory,
    userCategoryPercentage,
    industry,
    industryPercentage,
    practiceAreas,
    practiceAreasPercentage,
    teamSize,
    teamSizePercentage,
    processLifecycle,
    clientManagementSoftware,
    ComplianceandRiskSoftware,
    contractManageSoftware,
    DigitalSignature,
    DocumnetManagement,
    Ebilling,
    Ediscovery,
    IPManagement,
    LitigationManagement,
    legalWorkflow,
    features,
    freeTrial,
    timePeriod,
    timePeriodUnit,
    freeVersion,
    pricingModel,
    contractPeriod,
    contractUnit,
    nameofPlan1,
    nameofPlan2,
    nameofPlan3,
    validity1,
    validity2,
    validity3,
    price1,
    price2,
    price3,
    validity,
    price,
    pricingParams,
    Demo,
    DemoNote,
    support,
    supportNote,
    training,
    trainingNote,
    storage,
    storageNote,
    storageUnit,
    fileSizeUnit,
    fileSize,
    fileSizeNote,
    maintenance,
    maintenanceNote,
    reqForChange,
    reqForChangeNote,
    trainingReq,
    trainingReqNote,
    dataMigration,
    dataMigrationNote,

    videoUrl,
    ImageUrl,
    youtubeUrl,
    linkedinUrl,
    twitterUrl,
    instagramUrl,
    InternalCollaboration,
    ExternalCollaboration,
    AnalyticsAndReporting,
    ToolAdministrationAndControl,
    IntakeAndLeadManagement,
    ClientPortal,
    DocumentManagement,
    CaseAlerts,
    BudgetExpenseAndTimeTracking,
    ClientBillingAndInvoicing,
    PolicyManagement,
    IssueManagement,
    LawsComplianceAndRegulatoryTracking,
    ContractCreationAndAuthoring,
    ContractRepository,
    ContractNegotiation,
    LifecycleManagement,
    ClauseLibrary,
    FieldsCreation,
    TrackingAndValidity,
    DocumentManagementAndTemplates,
    DocumentCapturing,
    DocumentSearchAndNavigation,
    Authentication,
    TaskAllotment,
    BudgetingExpenseAndTimeTracking,
    ClientManagement,
    InvoiceGenerationAndReview,
    DataIdentificationAndCollection,
    SearchProcessingAndAnalysis,
    ReviewAndProduction,
    LegalHoldManagement,
    IdeationAndCreation,
    LifecycleManagementIP,
    SearchAndDiscovery,
    StorageAndRepository,
    MatterLifecycleTracking,
    CourtAndCaseSearch,
    LitigationDocketingFeatures,
    WorkflowDesignAndConfiguration,
    AssignmentAllotmentAndTracking,
    DocumentCreationAndManagement,
    LawsComplianceAndRegulatoryTrackingIP,
    attachmentUrl,
    ImagesUrl,
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

    const name = prname;
    const avgTimeAdoption = adoptionPeriod + " " + adoptionPeriodUnit;
    const timePeriodServer = timePeriod + " " + timePeriodUnit;
    // nameofPlan is array of nameofPlan1, nameofPlan2, nameofPlan3
    const nameofPlan = [nameofPlan1, nameofPlan2, nameofPlan3];
    const validity = [validity1, validity2, validity3];
    const price = [price1, price2, price3];
    const MinContarct = contractPeriod + " " + contractUnit;
    // Convert mobileAccessibility to boolean
    const storageServer = storage + " " + storageUnit;
    const fileSizeServer = fileSize + " " + fileSizeUnit;

    // number to string
    const userCategoryPercentageString = userCategoryPercentage.map(
      (number: number) => String(number)
    );
    const industryPercentageString = industryPercentage.map((number: number) =>
      String(number)
    );
    const practiceAreasPercentageString = practiceAreasPercentage.map(
      (number: number) => String(number)
    );
    const teamSizePercentageString = teamSizePercentage.map((number: number) =>
      String(number)
    );
    // logo upload and get logoUrl

    const product = await prisma.product.create({
      data: {
        userId,
        companyId: findCompanyId.id,
        name,
        logoUrl,
        category,
        deployement: deployment,
        mobileAvailable: mobileAccessibility,
        focusCountries,
        avgTimeAdoption,
        languages,
        securityCertificate,
        integration: integrations,
        description,
        usp,
        upcomingUpdates,
        userCategory,
        userCategoryPercentage: userCategoryPercentageString,
        industry,
        industryPercentage: industryPercentageString,
        practiceAreas,
        fileSizeNote,
        practiceAreasPercentage: practiceAreasPercentageString,
        teamSize,
        teamsizePercentage: teamSizePercentageString,
        processLifecycle,
        features,
        freeTrial,
        timePeriod: timePeriodServer,
        pricingModel,
        contractPeriod: MinContarct,
        nameofPlan,
        validity,
        price,
        pricingParams,
        freeVersion,
        Demo,
        DemoNote,
        support,
        supportNote,
        training,
        trainingNote,
        storage: [storageServer],
        storageNote,
        fileSize: [fileSizeServer],
        maintenance,
        maintenanceNote,
        reqForChange,
        reqForChangeNote,
        trainingReq,
        trainingReqNote,
        dataMigration,
        dataMigrationNote,
        Images: ImageUrl,
        videoUrl,
        youtubeUrl,
        linkedinUrl,
        twitterUrl,
        instagramUrl,
        attachments: attachmentUrl,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        msg: "Product created successfully",
        product: product.id,
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
