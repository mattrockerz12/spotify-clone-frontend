import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Provider";
//import AppBar from "./AppBar";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <ModalProvider />
          <Sidebar>{children}</Sidebar>
        </Providers>
      </body>
    </html>
  );
}
