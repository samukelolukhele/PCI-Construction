import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  const links = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
    // {
    //   to: "/services",
    //   text: "Services",
    // },
    {
      to: "/contact",
      text: "Contact",
    },
  ];

  return (
    <footer className="flex flex-col lg:flex-row justify-between gap-4 bg-brandBg py-10 rounded-t-[2rem] overflow-hidden px-6 lg:px-10">
      <div className="flex flex-col justify-center md:pl-4 w-fit gap-4 text-brandSecondary font-semibold">
        <p className="text-xl md:text-5xl font-bold text-brandBgSecondary">
          Pages
        </p>
        {links.map((link, key) => (
          <Link
            key={key}
            to={link.to}
            className="hover:text-brand hover:underline md:text-2xl"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="relative flex flex-col gap-12 py-10 bg-brandSecondary rounded-[2rem] lg:w-8/12 overflow-hidden h-[600px] lg:h-[400px]">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left container lg:mx-0 lg:w-6/12">
          <h1 className="font-bold text-2xl text-brandBg">
            Subscribe to our newletter
          </h1>
          <p className="relative z-10">
            Receive updates on our latest blog posts and our latest projects.
          </p>
          <input
            type="text"
            className="relative z-10 border-none p-3 rounded-lg w-full lg:w-[400px]"
            placeholder="Email Address"
          />
          <button
            className="relative z-10 bg-brand rounded-full py-3 hover:scale-110 duration-300 px-8 w-full lg:flex-1 lg:w-min text-white font-semibold text-lg"
            onClick={() =>
              alert("Thank you for subscribing to our newsletter!")
            }
          >
            Subscribe
          </button>
        </div>
        <div className="absolute inset-0 overflow-hidden lg:left-[25%]  bg-[url(/images/footer.svg)] bg-bottom bg-contain bg-no-repeat h-3/6 lg:h-4/6 mt-auto w-full" />
      </div>
    </footer>
  );
};

export default Footer;
