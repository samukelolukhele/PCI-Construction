import React from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  return (
    <div
      className="fixed z-20 items-center justify-center bottom-10 right-10 border-2 border-white hidden lg:flex rounded-full p-4 bg-brandBg hover:bg-brand duration-300 cursor-pointer text-white"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiArrowUp className="relative z-30 text-white" />
    </div>
  );
};

export default ScrollToTop;
