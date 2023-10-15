import React from "react";
import Hero from "./components/Hero";
import Faq from "./components/Faq/Faq";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
    <main className="pb-10 pt-40 flex flex-col justify-center items-stretch gap-10 w-full">
      <Hero />
      <Faq />
    </main>
    <Footer/>
    </>
  );
};

export default page;
