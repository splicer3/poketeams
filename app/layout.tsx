import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PokedexProvider, usePokedex } from "@/context/usePokedex";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "PokeTeams";
const APP_DEFAULT_TITLE = "PokeTeams";
const APP_TITLE_TEMPLATE = "%s - Analyze your teams";
const APP_DESCRIPTION = "A Pokemon Team Builder with a built-in analyzer";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#011C2C",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
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
