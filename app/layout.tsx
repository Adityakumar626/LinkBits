import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkBit - URL Shortener",
  description: "A simple and efficient URL shortening service.",
  icons: {
    icon: "public/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
          <link rel="icon" href="/favicon.ico" />
        </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
