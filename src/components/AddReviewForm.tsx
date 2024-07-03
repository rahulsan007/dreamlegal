"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Rating from "@mui/material/Rating";

import RatingScale from "./ratingSacle";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";

const CheckboxDemo = ({ product }: any) => {
  const [selectedInvolvements, setSelectedInvolvements] = useState<string[]>(
    []
  );
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [usedOtherProduct, setUsedOtherProduct] = useState("default");
  const [q10, setQ10] = useState("default");
  const [usageFrequency, setUsageFrequency] = useState("daily");
  const [utilization, setUtilization] = useState("");
  const [liked, setLiked] = useState("");
  const [disliked, setDisliked] = useState("");
  const [easeOfLearning, setEaseOfLearning] = useState(2.5);
  const [integration, setIntegration] = useState(2.5);
  const [support, setSupport] = useState(2.5);
  const [roi, setRoi] = useState(2.5);
  const [featureRatings, setFeatureRatings] = useState(() =>
    product.features.map((feature: { category: any }) => ({
      category: feature.category,
      rating: 2.5, // Default rating value
    }))
  );

  const [processLifecycleRatings, setProcessLifecycleRatings] = useState(() =>
    product.processLifecycle.map((lifecycle: { category: any }) => ({
      category: lifecycle.category,
      rating: 2.5, // Default rating value
    }))
  );
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = () => {
    // Consolidate all state values into an object
    const formData = {
      selectedInvolvements,
      selectedReasons,
      selectedGoals,
      usedOtherProduct,
      q10,
      usageFrequency,
      utilization,
      liked,
      disliked,
      easeOfLearning,
      integration,
      support,
      roi,
      featureRatings,
      processLifecycleRatings,
      rating,
      uploadedFile,
    };

    // Log the form data object
    console.log("Form Data:", formData);

    // Optionally, you can perform further actions here (e.g., submit data to server)
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const usedOtherProductOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const q10Options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const usageFrequencyOptions = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
    { label: "Occasionally", value: "occasionally" },
  ];
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      console.log("Uploaded file:", file);
    }
  };

  const handleUsedOtherProductChange = (event: any) => {
    const { value } = event.target;
    setUsedOtherProduct(value);
    console.log("Used other product:", value);
  };

  const handleq10 = (event: any) => {
    const { value } = event.target;
    setQ10(value);
    console.log("Used other product:", value);
  };

  const handleUsageFrequencyChange = (event: any) => {
    const { value } = event.target;
    setUsageFrequency(value);
    console.log("Usage frequency:", value);
  };

  const involvementOptions = [
    "I was the decision maker in buying this product.",
    "I participated in purchasing or negotiating the contract terms for this product.",
    "I was involved in setting up, implementing, or customizing this product.",
    "I serve as the administrator for this product.",
    "I am a user of this product.",
  ];

  const reasonOptions = [
    "Positive reviews/testimonials",
    "Recommendation from colleagues or peers",
    "Demonstrations or trials",
    "Competitive pricing",
    "Integration capability with existing tools",
    "Specific features/functionality that met our needs",
    "Reputation of the company/vendor",
    "Referral from a trusted source",
  ];

  const goalOptions = [
    "Increase in revenue",
    "Cost reduction",
    "Improve efficiency in workflow",
    "Enhance collaboration among team members",
    "Streamline processes and workflows",
    "Improve client/customer satisfaction",
    "Keep up with industry trends/competitors",
    "Address specific regulatory/compliance requirements",
  ];

  const handleChange = (event: any) => {
    const { value, checked } = event.target;
    setSelectedInvolvements((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((involvement) => involvement !== value)
    );
    console.log(selectedInvolvements);
  };

  const handleReasonChange = (event: any) => {
    const { value, checked } = event.target;
    setSelectedReasons((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((reason) => reason !== value)
    );
    console.log("Selected Reasons:", selectedReasons);
  };

  const handleGoalChange = (event: any) => {
    const { value, checked } = event.target;
    setSelectedGoals((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((goal) => goal !== value)
    );
    console.log("Selected Goals:", selectedGoals);
  };

  const handleUtilizationChange = (event: any) => {
    const { value } = event.target;
    setUtilization(value);
    console.log("Utilization feedback:", value);
  };

  const handleLikedChange = (event: any) => {
    const { value } = event.target;
    setLiked(value);
    console.log("Liked feedback:", value);
  };

  const handleDislikedChange = (event: any) => {
    const { value } = event.target;
    setDisliked(value);
    console.log("Disliked feedback:", value);
  };

  const handleEaseOfLearningChange = (
    event: any,
    newValue: React.SetStateAction<number> | null
  ) => {
    if (newValue !== null) {
      setEaseOfLearning(newValue);
      console.log("Ease of learning rating:", newValue);
    }
  };

  const handleIntegrationChange = (
    event: any,
    newValue: React.SetStateAction<number> | null
  ) => {
    if (newValue !== null) {
      setIntegration(newValue);
      console.log("Integration rating:", newValue);
    }
  };

  const handleSupportChange = (
    event: any,
    newValue: React.SetStateAction<number> | null
  ) => {
    if (newValue !== null) {
      setSupport(newValue);
      console.log("Support rating:", newValue);
    }
  };

  const handleRoiChange = (
    event: any,
    newValue: React.SetStateAction<number> | null
  ) => {
    if (newValue !== null) {
      setRoi(newValue);
      console.log("Return on Investment rating:", newValue);
    }
  };

  const handleFeatureRatingChange = (category: any, newValue: null) => {
    if (newValue !== null) {
      setFeatureRatings((prevRatings: any[]) =>
        prevRatings.map((rating: { category: any }) =>
          rating.category === category
            ? { ...rating, rating: newValue }
            : rating
        )
      );
      console.log("Updated feature ratings:", featureRatings);
    }
  };

  // Handle change for process lifecycle ratings
  const handleProcessLifecycleRatingChange = (
    category: any,
    newValue: null
  ) => {
    if (newValue !== null) {
      setProcessLifecycleRatings((prevRatings: any[]) =>
        prevRatings.map((rating: { category: any }) =>
          rating.category === category
            ? { ...rating, rating: newValue }
            : rating
        )
      );
      console.log(
        "Updated process lifecycle ratings:",
        processLifecycleRatings
      );
    }
  };

  return (
    <ScrollArea className=" h-[500px] w-full">
      <div className="flex flex-col space-y-4 w-[80%] md:w-full">
        <div className="mt-2">
          <p>
            <b>
              1. Which best describes your involvement with this product? (Check
              all that apply)
            </b>
          </p>
          {involvementOptions.map((option) => (
            <div key={option} className="items-top flex space-x-2 mt-2">
              <Input
                type="checkbox"
                value={option}
                checked={selectedInvolvements.includes(option)}
                onChange={handleChange}
                className="custom-checkbox w-5 h-5"
              />
              <Label className="text-sm font-medium leading-none ml-2">
                {option}
              </Label>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <div className="flex flex-col space-y-4">
            <p>
              <b>2. What made you buy this product?</b>
            </p>
            {reasonOptions.map((option) => (
              <div key={option} className="items-top flex space-x-2 mt-2">
                <Input
                  type="checkbox"
                  value={option}
                  checked={selectedReasons.includes(option)}
                  onChange={handleReasonChange}
                  className="custom-checkbox w-5 h-5"
                />
                <label className="text-sm font-medium leading-none ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <p>
              <b>3. What was the goal behind buying the product?</b>
            </p>
            {goalOptions.map((option) => (
              <div key={option} className="items-top flex space-x-2 mt-2">
                <Input
                  type="checkbox"
                  value={option}
                  checked={selectedGoals.includes(option)}
                  onChange={handleGoalChange}
                  className="custom-checkbox w-5 h-5"
                />
                <label className="text-sm font-medium leading-none ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex flex-col space-y-4">
            <p>
              <b>
                4. Were you using any other product in this category before
                adopting the current legal technology solution?
              </b>
            </p>
            {usedOtherProductOptions.map((option) => (
              <div key={option.value} className="items-top flex space-x-2 mt-2">
                <Input
                  type="radio"
                  value={option.value}
                  checked={usedOtherProduct === option.value}
                  onChange={handleUsedOtherProductChange}
                  className="custom-radio w-5 h-5"
                  id={`used-other-${option.value}`}
                />
                <label
                  htmlFor={`used-other-${option.value}`}
                  className="text-sm font-medium leading-none ml-2"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <p>
              <b>5. How often do you and your team utilize the solution?</b>
            </p>
            {usageFrequencyOptions.map((option) => (
              <div key={option.value} className="items-top flex space-x-2 mt-2">
                <Input
                  type="radio"
                  value={option.value}
                  checked={usageFrequency === option.value}
                  onChange={handleUsageFrequencyChange}
                  className="custom-radio w-5 h-5"
                  id={`usage-frequency-${option.value}`}
                />
                <label
                  htmlFor={`usage-frequency-${option.value}`}
                  className="text-sm font-medium leading-none ml-2"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex flex-col space-y-4 mt-4">
            <p>
              <b>6. How often do you and your team utilize the solution?</b>
            </p>
            <Textarea
              placeholder="Type your message here."
              value={utilization}
              onChange={handleUtilizationChange}
              className="textarea"
            />
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <p>
              <b>7. What did you like the best about the product?</b>
            </p>
            <Textarea
              placeholder="Type your message here."
              value={liked}
              onChange={handleLikedChange}
              className="textarea"
            />
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <p>
              <b>8. What did you not like about the product?</b>
            </p>
            <Textarea
              placeholder="Type your message here."
              value={disliked}
              onChange={handleDislikedChange}
              className="textarea"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4">
          <p className=" font-bold text-xl">Overall experience</p>
          <p>Ease of learning</p>
          <Rating
            name="ease-of-learning-rating"
            value={easeOfLearning}
            precision={0.5}
            onChange={handleEaseOfLearningChange}
          />

          <p>Integration with existing workflow</p>
          <Rating
            name="integration-rating"
            value={integration}
            precision={0.5}
            onChange={handleIntegrationChange}
          />

          <p>Support and service</p>
          <Rating
            name="support-rating"
            value={support}
            precision={0.5}
            onChange={handleSupportChange}
          />

          <p>Return on Investment</p>
          <Rating
            name="roi-rating"
            value={roi}
            precision={0.5}
            onChange={handleRoiChange}
          />
        </div>

        <div>
          {/* Features */}
          <div>
            <p className=" font-bold text-xl">Features experience</p>
            {product.features.map((feature: { category: string }) => (
              // @ts-ignore
              <div key={feature.category}>
                <p>{feature.category}</p>
                <Rating
                  // @ts-ignore

                  name={feature.category.replace(/\s+/g, "-").toLowerCase()}
                  value={
                    featureRatings.find(
                      (rating: { category: any }) =>
                        rating.category === feature.category
                    )?.rating || 2.5
                  }
                  precision={0.5}
                  // ts-ignore
                  onChange={(event, newValue) =>
                    // ts-ignore
                    handleFeatureRatingChange(
                      feature.category,
                      // ts-ignore
                      newValue
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* Process Lifecycle */}
          <div>
            <p className=" font-bold text-xl">Process Lifecycle experience</p>

            {product.processLifecycle.map(
              (lifecycle: {
                category: string;

                subcategories: any[];
              }) => (
                <div key={lifecycle.category}>
                  <h4>{lifecycle.category}</h4>
                  {lifecycle.subcategories.map((subcategory: string) => (
                    <div key={`${lifecycle.category}-${subcategory}`}>
                      <p>{subcategory}</p>
                      <Rating
                        name={`${lifecycle.category}-${subcategory}`
                          .replace(/\s+/g, "-")
                          .toLowerCase()}
                        value={
                          processLifecycleRatings.find(
                            (rating: { category: string }) =>
                              rating.category ===
                              `${lifecycle.category} - ${subcategory}`
                          )?.rating || 2.5
                        }
                        precision={0.5}
                        onChange={(event, newValue) =>
                          handleProcessLifecycleRatingChange(
                            `${lifecycle.category} - ${subcategory}`,
                            // ts-ignore
                            newValue
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>

        <p>
          <b>9. How likely are you to recommend this product to someone?</b>
        </p>

        <div className="rating-scale">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`rating-box ${index < rating ? "rated" : ""}`}
              style={{
                backgroundColor: index < rating ? "rgb(81, 120, 255)" : "white",
              }}
              onClick={() => handleRatingClick(index + 1)}
            >
              {index + 1}
            </div>
          ))}
          <style>{`
        .rating-scale {
          display: flex;
          align-items: center;
        }
        .rating-box {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 5px;
          cursor: pointer;
        }
        .rated {
          background-color: rgb(81, 120, 255);
          color: white;
        }
      `}</style>
        </div>

        <div className="mt-2">
          <div className="flex flex-col space-y-4">
            <p>
              <b>10.Would you be available for someone for reference?</b>
            </p>
            {q10Options.map((option) => (
              <div key={option.value} className="items-top flex space-x-2 mt-2">
                <Input
                  type="radio"
                  value={option.value}
                  checked={q10 === option.value}
                  onChange={handleq10}
                  className="custom-radio w-5 h-5"
                  id={`used-other-${option.value}`}
                />
                <label
                  htmlFor={`used-other-${option.value}`}
                  className="text-sm font-medium leading-none ml-2"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <p>
              <b>
                11. Please Upload a supporting document to show that you are a
                genuine user of the product? (invoice, letter of engagement)
              </b>
            </p>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input id="picture" type="file" onChange={handleFileChange} />
          </div>
        </div>

        <div>
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-white py-2 px-4 rounded w-24 text-center"
          >
            Submit
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default CheckboxDemo;
