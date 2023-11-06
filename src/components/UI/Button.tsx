import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({ children, className,width="w-full", ...rest }: ButtonProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg text-white p-2`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
