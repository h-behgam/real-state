"use client";

import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

interface InfoButtonProps {
  children: ReactNode;
  disabled: boolean;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  noCss?: boolean;
}

export default function ClientSideButton({ children, disabled, classname, onClick }: InfoButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn("rounded-full px-5 py-2 text-white duration-300", classname)}
    >
      {children}
    </button>
  );
}
