"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";

export default function LogoutButton({ children }: { children: ReactNode }) {
  const signOutHandler = () => {
    signOut();
  };
  return (
    <button className="text-red-600 flex items-center" onClick={signOutHandler}>
      {children}
    </button>
  );
}
