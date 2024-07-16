"use client";
import VendorDashboardPage from "@/pages/VendorDashboardPage";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import { Suspense } from "react";

function VendorPage() {
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [vendorId, setVendorId] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (searchParams) {
      const search = Boolean(searchParams.get("verified"));
      setVerified(search);
    }

    const getVendorId = typeof window !== "undefined" ? localStorage.getItem("vendorId") : null;
    if (!getVendorId) {
      router.push("/sign-in");
    } else {
      setVendorId(getVendorId);
    }

    setLoading(false);
  }, [searchParams, router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <VendorDashboardPage verified={verified} />
    </div>
  );
}

export default VendorPage;
