import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Provider";
//import AppBar from "./AppBar";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { Suspense } from "react";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Suspense fallback={null}>{modal}</Suspense>
          <Sidebar>{children}</Sidebar>
        </Providers>
      </body>
    </html>
  );
}
