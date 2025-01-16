import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BodyFlow - Your AI Workout Planner",
  description: "Get personalized workout plans tailored to your goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
