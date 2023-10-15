import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PokedexProvider, usePokedex } from "@/context/usePokedex";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-gray-100 to-gray-200 relative dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 text-zinc-800 dark:text-zinc-100 dark:text-opacity-90  min-h-screen`}
      >
        <SupabaseProvider>
          <UserProvider>
            <PokedexProvider>
              <ModalProvider />
              <Header />
              {children}
              <Toaster />
            </PokedexProvider>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
