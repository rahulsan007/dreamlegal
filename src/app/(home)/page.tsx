import HomePage from "@/pages/HomePage";
import Image from "next/image";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-all-products`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const data = await getData();
  return <HomePage data={data}></HomePage>;
}
