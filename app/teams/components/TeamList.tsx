"use client";

import { DBTeam, useTeamsByUser } from "@/context/useTeamsByUser";
import { useUser } from "@/hooks/useUser";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import TeamItem from "./TeamItem";
import { useRouter } from "next/navigation";
import TeamModal from "@/components/Modals/TeamModal";
import { Dna } from "react-loader-spinner";
import useTeamModal from "@/hooks/useTeamModal";

const TeamList = () => {
  const { teams, loading, error } = useTeamsByUser();
  const teamModal = useTeamModal();

  const handleClick = (team: DBTeam) => {
    teamModal.setSelectedTeam(team);
    teamModal.onOpen();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Dna width={128} height={128} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <TeamModal />
      <motion.section
        className="flex-col cool-box justify-between px-6 items-center self-center w-[70%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        <h1 className="text-center text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-800 to-gray-600 py-6">
          Your teams
        </h1>
        <div className="flex flex-col lg:flex-row w-full justify-around items-center">
          <div className="flex-col space-y-10">
            <div className="flex flex-col sm:flex-row flex-wrap gap-10">
              {teams!.map((team, index) => (
                <TeamItem key={index} team={team} onClick={handleClick} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default TeamList;
