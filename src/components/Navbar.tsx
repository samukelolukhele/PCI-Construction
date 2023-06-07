import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useMedia from "./hooks/useMedia";

type NLProps = {
  active: boolean;
  click: React.MouseEventHandler<HTMLAnchorElement>;
};

const NavLinks = ({ active, click }: NLProps) => {
  const activeStyling: string = "relative opacity-100 translate-y-0";
  const inactiveStyling: string = "absolute opacity-0 -translate-y-full";

  return (
    <div
      className={`${
        active ? activeStyling : inactiveStyling
      } ease-in duration-300 flex flex-col lg:flex-row items-center [&>:nth-child(odd)]:bg-indigo-700 [&>:nth-child(even)]:bg-indigo-800 [&>:nth-child(even)]:lg:bg-transparent
       [&>:nth-child(odd)]:lg:bg-transparent lg:py-0 font-extralight lg:font-normal text-xl 
       lg:w-fit lg:text-brandSecondary py-8 w-full text-white justify-center lg:gap-4 lg:relative lg:opacity-100 lg:translate-y-0`}
    >
      <Link onClick={click} className="w-full text-center py-8" to="/">
        Home
      </Link>

      <Link onClick={click} className="w-full text-center py-8" to="/about">
        About
      </Link>

      {/* <Link onClick={click} className="w-full text-center py-8" to="/services">
        Services
      </Link> */}

      <Link onClick={click} className="w-full text-center py-8" to="/contact">
        Contact
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const { isTablet } = useMedia();

  return (
    <nav className="relative flex flex-col bg-brandBg text-white items-center justify-between w-full py-4 lg:py-4">
      <div className="w-full flex justify-between items-center container">
        <div className="">
          <img src="/images/Logos/Logo.svg" alt="" className="" />
        </div>
        {!isTablet && (
          <NavLinks click={() => setMobileActive(false)} active={isTablet} />
        )}
        <div
          onClick={() => setMobileActive(!mobileActive)}
          className="text-3xl flex items-center justify-center text-brandSecondary lg:hidden cursor-pointer"
        >
          {mobileActive ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {isTablet && (
        <NavLinks click={() => setMobileActive(false)} active={mobileActive} />
      )}
    </nav>
  );
};

export default Navbar;
