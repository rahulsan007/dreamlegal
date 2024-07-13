import React from "react";
import { Suspense } from "react";

import Loading from "@/components/Loading";
import UserPage from "@/pages/UserPage";

function UserPageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <UserPage />
    </Suspense>
  );
}

export default UserPageWrapper;
