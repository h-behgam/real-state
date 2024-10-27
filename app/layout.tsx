import type { Metadata } from "next";

import { yekan } from "./utils/fonts";
import "./globals.css";
import MainLayout from "./components/layout";

export const metadata: Metadata = {
  title: "real state",
  description: "real state app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`overflow-x-hidden`}>
      <body className={`antialiased xl:container mx-auto ${yekan.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
