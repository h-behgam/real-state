import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-96 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
