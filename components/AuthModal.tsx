"use client";

import useAuthModal from "@/hooks/useAuthModal";
//import { Auth } from "@supabase/auth-ui-react";
import Modal from "./Modal";
import SignIn from "./SignIn";
//import { useSupabaseClient } from "@supabase/auth-helpers-react";
//import { useRouter } from "next/router";
//import { ThemeSupa } from "@supabase/auth-ui-shared";
//import { createClient } from "@supabase/supabase-js";
const AuthModal = () => {
  //const supabaseClient = useSupabaseClient();
  //const router = useRouter();

  /*const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );*/
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <SignIn />
    </Modal>
  );
};

export default AuthModal;
