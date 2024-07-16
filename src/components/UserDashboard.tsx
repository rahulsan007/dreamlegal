"use client";
import React, { useEffect } from "react";
import BookMarkCard from "./BookMarkCard";
import { IoIosNotifications } from "react-icons/io";
import SliderElement from "./Silder";
import { ScrollArea } from "./ui/scroll-area";
import UserReviewCard from "./UserReviewCard";
import SavedItems from "./SavedItems";

function UserDashboard() {
  type Review = {
    id: string;
    userId: string;
    productId: string;
    involvement: string[];
    WhyBought: string[];
    GoalBehind: string[];
    otherProducts: string;
    oftenUsed: string;
    overallExperienc: string;
    bestThing: string;
    worstThing: string;
    easeOfLearning: number;
    integration: number;
    support: number;
    roi: number;
    functionality: Record<string, any>;
    processStep: Record<string, any>;
    recommend: number;
    reference: string;
    attachement?: string;
    createdAt: string;
    updatedAt: string;
    product: JSON;
};

  const [userReviews, setUserReviews] = React.useState<Review[]>([]);
  const userId =typeof window !== "undefined" ? localStorage.getItem('userId') : null;
  useEffect(() => {
    const fetchReviews = (userId:any) => {
      if (userId) {
          fetch('/api/get-user-review', {
              method: 'POST', // Use POST method
              headers: {
                  'Content-Type': 'application/json' // Set the content type to JSON
              },
              body: JSON.stringify({ userId }) // Send the userId in the request body
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log(data);
              // Handle the fetched reviews data as needed
              setUserReviews(data.userReviews);
          })
          .catch(error => {
              console.error('Error fetching reviews:', error);
          });
      }
  };

    fetchReviews(userId);
  }, [userId]);
  return (
    <div className="font-clarity">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <h2 className=" text-gray-900 text-xl font-bold ">
              Reviewed Products
            </h2>

            <ScrollArea className="md:h-72 border rounded-md px-4 py-5">
                {userReviews?.map((review: Review) => (
                    <UserReviewCard key={review.id} review={review} />
                ))}
            </ScrollArea>
          </div>

          <div>
            <h2 className=" text-gray-900 text-xl font-bold ">
              Saved Resources
            </h2>
            <ScrollArea className=" md:h-72 border rounded-md px-4 py-5">
              <SavedItems />
              <SavedItems />
              <SavedItems />
              <SavedItems />
              <SavedItems />
            </ScrollArea>
          </div>
        </div>

        <h2 className=" text-gray-900 text-xl font-bold ">
          Followed and Bookmarked
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 my-4 ">
          <div className=" col-span-3">
            <SliderElement>
              <BookMarkCard />
              <BookMarkCard />
              <BookMarkCard />
              <BookMarkCard />
            </SliderElement>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-gray-900 text-xl font-bold my-5 ">Notification</h2>
      </div>
      <div className="">
        <div className="md:pb-24">
          <div className="flex items-center gap-4 md:w-3/5">
            <div className="bg-primary2 text-primary1 p-3 rounded-full">
              <IoIosNotifications />
            </div>
            <span className="text-sm text-gray-900 font-bold">Dreamlegal</span>
            <span className="text-xs text-slate-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-5">1 day ago</span>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
