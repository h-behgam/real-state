import { ReactNode } from "react";

interface InfoButtonProps {
  children: ReactNode;
  disabled?: boolean;
  classname?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({ children, disabled = false, classname = "", onClick }: InfoButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={classname}>
      {children}
    </button>
  );
}
