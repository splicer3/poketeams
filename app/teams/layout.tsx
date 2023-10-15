"use client";
import { TeamProvider } from "@/context/useTeam";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TeamProvider>{children}</TeamProvider>;
}
