"use client";

import axios from "../axios";
import { useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post("/api/token/refresh", {
      token: session?.user?.token,
      refreshToken: session?.user?.refreshToken,
    });

    if (session) session.user.token = res.data.token;
  };
  return refreshToken;
};