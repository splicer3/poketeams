"use client";
import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LoginInfo = () => {
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.push("/");
  };

  const onLogout = () => {
    toast.promise(handleLogout(), {
      loading: "Logging out...",
      success: "Logged out!",
      error: "Could not log out",
    });
  };

  return (
    <motion.div
      className="flex flex-col cool-box justify-between p-6 items-center gap-4 self-center w-[90%] sm:w-[70%]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <p className="text-xl text-center">
        Logged in as <span className="font-semibold">{user?.email}</span>
      </p>
      <Button onClick={onLogout}>Logout</Button>
    </motion.div>
  );
};

export default LoginInfo;
