"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CheckPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchUser = async () => {
      if (userEmail) {
        try {
          const response = await fetch("/api/google-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail }),
          });
          const data = await response.json();
          if (data.success && data.user) {
            localStorage.setItem("userId", data.user.id);
            router.push(`/user/${data.user.id}?verified=true`);
          } else {
            // Handle user not found scenario
            router.push("/error");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          router.push("/error");
        }
      }
    };

    fetchUser();
  }, [userEmail, router]);

  return <div>Loading...</div>;
};

export default CheckPage;
