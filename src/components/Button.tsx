import React from "react";
import { Link } from "react-router-dom";

type BProps = {
  children: React.ReactNode;
  to: string | "/" | "/about" | "/contact" | "/services";
  color: "primary" | "secondary" | "outline" | "tetiary";
  className?: string;
};

const Button = ({ to, children, color, className }: BProps) => {
  return (
    <Link
      className={`${className} py-4 px-8 text-xl btn-${color} font-semibold text-center rounded ease-in duration-200 hover:scale-110`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Button;
