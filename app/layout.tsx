import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EAMCET Ace | Adaptive Learning Platform",
  description: "Master EAMCET with AI-powered adaptive quizzes and personalized feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
