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
      className={`${className} py-4 px-8 text-xl btn-${color} font-semibold text-center rounded-xl ease-in duration-200 hover:scale-110`}
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
      className={`${className} py-4 px-8 text-xl btn-${color} font-semibold text-center rounded-xl ease-in duration-200 hover:scale-110`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
