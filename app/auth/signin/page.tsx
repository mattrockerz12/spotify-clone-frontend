"use client";

import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const SignInPage = () => {
  const email = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <input type="email" onChange={(e) => (email.current = e.target.value)} />
        <input type="password" onChange={(e) => (pass.current = e.target.value)} />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default SignInPage;