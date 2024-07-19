"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { FaStar } from "react-icons/fa6";

function ProductAllReviewProgressbar({ product }: any) {
  const [ratings, setRatings] = useState({
    overallRating: 0,
    easeOfLearning: 0,
    integration: 0,
    support: 0,
    roi: 0,
    totalReviews: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRatings = async (id: any) => {
      try {
        const response = await fetch("/api/cal-review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: id }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data rating", data);
        
        // Update the state with the fetched data
        setRatings(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (product && product.id) {
      fetchRatings(product.id);
    } else {
      setLoading(false);
      setError("Product ID is missing.");
    }
  }, [product]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const { overallRating, easeOfLearning, integration, support, roi, totalReviews } = ratings;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <h2 className="text-lg font-bold text-gray-900 pb-2">Overall Rating</h2>
        <div className="inline-flex gap-4 items-center">
          <FaStar className="text-[#FDB52A] h-16 w-16" />
          <p className="text-[#FDB52A] text-[45px]">
            {overallRating}
            <span className="text-[35px]">/5</span>
          </p>
        </div>
        <p className="text-slate-500">Based on {totalReviews}+ reviews</p>
      </div>
      <div className="flex flex-col gap-2 font-clarity">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Features</h2>
            <h3 className="text-[#FDB52A]">{easeOfLearning}/5</h3>
          </div>
          <Progress value={(easeOfLearning / 5) * 100} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Value for money</h2>
            <h3 className="text-[#FDB52A]">{integration}/5</h3>
          </div>
          <Progress value={(integration / 5) * 100} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Easy to use</h2>
            <h3 className="text-[#FDB52A]">{support}/5</h3>
          </div>
          <Progress value={(support / 5) * 100} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Customer support</h2>
            <h3 className="text-[#FDB52A]">{roi}/5</h3>
          </div>
          <Progress value={(roi / 5) * 100} className="h-2" />
        </div>
      </div>
    </div>
  );
}

export default ProductAllReviewProgressbar;
