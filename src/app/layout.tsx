import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header"

const saira = Saira({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
