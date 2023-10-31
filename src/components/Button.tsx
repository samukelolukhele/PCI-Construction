import React from "react";
import { Link } from "react-router-dom";

type BProps = {
  children: React.ReactNode;
  to?: string | "/" | "/about" | "/contact" | "/services";
  color: "primary" | "secondary" | "outline" | "outline-dark" | "tetiary";
  className?: string;
};

type BBProps = BProps & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ to = "/", children, color, className }: BProps) => {
  return (
    <Link
      className={`${className} py-2 min-w-[150px] px-8 text-lg btn-${color} font-semibold text-center rounded-full ease-in duration-200 hover:scale-110`}
      to={to}
    >
      {children}
    </Link>
  );
};

export const BasicButton = ({
  children,
  color,
  className,
  onClick,
}: BBProps) => {
  return (
    <button
      className={`${className} py-2 min-w-[150px] px-8 text-lg btn-${color} font-semibold text-center rounded-full ease-in duration-200 hover:scale-110`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
