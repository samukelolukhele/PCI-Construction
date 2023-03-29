import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const activeStyling: string = "relative opacity-100 translate-y-0";
  const inactiveStyling: string = "absolute opacity-0 translate-y-full";

  return (
    <nav className="relative flex bg-brandBg text-white px-4 lg:px-8 items-center justify-between w-full py-4">
      <div className="">
        <img src="/images/Logos/Logo.svg" alt="" className="" />
      </div>
      <div
        className={`${
          mobileActive ? activeStyling : inactiveStyling
        } ease-in duration-300 flex flex-col lg:flex-row items-center justify-center gap-4 lg:relative lg:opacity-100 lg:translate-y-0`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div
        onClick={() => setMobileActive(!mobileActive)}
        className="text-3xl flex items-center justify-center text-brandSecondary lg:hidden cursor-pointer"
      >
        {mobileActive ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
