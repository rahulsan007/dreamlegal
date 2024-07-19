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
    const data: UserProfile = await response.json();

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary 
      throw new Error("Failed to fetch data");
    }

    if (data.success) {
      console.log(data);
      return data;
    } else {
      console.error(data);
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    console.log("done");
  }
};

export default async function Page({ params }: { params: { userid: string } }) {
  let data: UserProfile | null = null;
    data = await fetchProfile(params.userid);
  

  if (data && data.success) {
    return     <UserPage data={data} />;
  }

  // You should return a default UI if data is null or data.success is false
  return <Complete></Complete>;
}
