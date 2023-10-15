"use client";
import { Dna } from "react-loader-spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen cool-box">
      <Dna width={128} height={128} />
    </div>
  );
};

export default Loading;
