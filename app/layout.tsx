import type { Metadata } from "next";

import { yekan } from "./utils/fonts";
import "./globals.css";
import MainLayout from "./components/layout";

export const metadata: Metadata = {
  title: "سامانه ثبت آگهی املاک",
  description: "سایت آگهی املاک",
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
