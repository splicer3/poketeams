import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png"
import { AiFillGithub } from "react-icons/ai"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center p-10 px-4 text-center text-gray-500 dark:text-gray-400">
        <Image src={Logo} alt="SPLCD Logo" height={128} width={128} className="mb-4"/>
        <Link href={"https://github.com/splicer3"}>
            <AiFillGithub className="w-8 h-8 hover:text-gray-600 dark:hover:text-gray-300 mb-2"/>
        </Link>
        <small className="mb-2 block text-xs">
            2023 Matteo Di Iorio.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> built with
            React & Next.js, TypeScript, Tailwind CSS,
            Framer Motion, PokeAPI and Supabase, hosted on Vercel.
        </p>
        </footer>
  );
}