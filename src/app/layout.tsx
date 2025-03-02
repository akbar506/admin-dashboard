import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutClient from "./layoutClient"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "A modern dashboard interface for managing users, analytics, and system settings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutClient
      children={children}
      geistMono={geistMono}
      geistSans={geistSans}
    />
  );
}
