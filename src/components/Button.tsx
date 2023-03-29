import React from "react";
import { Link } from "react-router-dom";

type BProps = {
  children: React.ReactNode;
  to: string | "/" | "/about" | "/contact" | "/services";
  color: "primary" | "secondary";
  className?: string;
};

const Button = ({ to, children, color, className }: BProps) => {
  return (
    <Link
      className={`${className} py-2 w-[120px] ${
        color === "primary"
          ? "bg-brand text-white"
          : "bg-brandSecondary text-black"
      } font-semibold text-center rounded ease-in duration-200 hover:scale-110`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default Button;
