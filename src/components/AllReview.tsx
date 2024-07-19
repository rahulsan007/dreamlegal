"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "./ReviewCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import AddReviewForm from "./AddReviewForm";
import Link from "next/link";

function AllReview({ type = "user", product }: any) {

  const userId =  typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const [reviews, setReviews] = useState<any[]>([]);
  const [overallRating, setOverallRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/get-reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product.id }),
        });

        const result = await response.json();

        if (result.success) {
          setReviews(result.reviews);
          setOverallRating(result.overallRating);
          setTotalReviews(result.totalReviews);
        } else {
          setError(result.msg);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [product.id]);
  return (
    <div className=" font-clarity mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
       
      
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5">
        {userId ? (
          // <Dialog>
          //   <DialogTrigger className="mt-6 ml-auto">
          //     <button className=" ml-auto bg-primary1 text-white py-4 px-4 rounded-lg text-xs md:w-[200px]">
          //       Add Review
          //     </button>
          //   </DialogTrigger>
          //   <DialogContent className="w-full">
          //     <AddReviewForm product={product} />
          //   </DialogContent>
          // </Dialog>
          <Link
            className="ml-auto mt-4"
            href={{
              pathname: `/review`,
              query: {
                id: product.id,
              },
            }}
          >
            <button className="  bg-primary1 text-white py-4 px-4 rounded-lg text-xs md:w-[200px]">
              Add Review
            </button>
          </Link>
        ) : (
        <Link href={"/sign-in"}>
          <button className=" ml-auto bg-primary1 text-white py-4 px-4 rounded-lg text-xs md:w-[200px]">
            Login to Review
          </button>
        </Link>
        )}
      </div>
      {reviews.length > 0 ? (
        reviews.map((review: any) => (
          <ReviewCard key={review.id} review={review} overallRating={overallRating} />
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default AllReview;
