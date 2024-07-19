import UserPage from "@/pages/UserPage";
import Complete from "./_components/Complete";
import UserPageWrapper from "./_components/UserPageWrapper";

interface UserProfile {
  success: boolean;
  profile: any;
  account: any;
}

const fetchProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-user?userId=${userId}`);
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary 
      throw new Error("Failed to fetch data");
    }
    const data: UserProfile = await response.json();
    
    if (data.success) {
      return data;
    } else {
      console.error("API response error:", data);
      return null;
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  } finally {
    console.log("Fetch completed");
  }
};

export default async function Page({ params }: { params: { userid: string } }) {
  const data = await fetchProfile(params.userid);

  if (data && data.success) {
    return <UserPage data={data} />;
  }

  // Return a default UI if data is null or data.success is false
  return <Complete />;
}
