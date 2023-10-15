"use client";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeMinimal, ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Auth
        theme="light"
        magicLink
        providers={["github", "google"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#74e3da",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
