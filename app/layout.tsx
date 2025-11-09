import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Secret Sunrise",
  description: "A platform for wellness and mindfulness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
