import React from "react";
import TeamList from "./components/TeamList";
import UserTeams from "./components/UserTeams";

const page = () => {
  return (
    <main className="pb-10 pt-40 flex flex-col justify-center items-stretch gap-10 w-full">
      <UserTeams />
    </main>
  );
};

export default page;
