import React from "react";
import TeamList from "./components/TeamList";
import UserTeams from "./components/UserTeams";
import LoginInfo from "./components/LoginInfo";

const page = () => {
  return (
    <main className="pb-10 pt-40 flex flex-col justify-center items-stretch gap-10 w-full">
      <LoginInfo />
      <UserTeams />
    </main>
  );
};

export default page;
