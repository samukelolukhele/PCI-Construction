import React from "react";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-main h-full py-4 rounded-b-[2rem] mb-20 md:mb-44 z-[0]">
      <div className="container relative flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 text-left justify-between h-full">
          <div className="flex flex-col justify-center gap-4 md:gap-8 items-start md:w-9/12 lg:w-4/12">
            <h1 className="header-text text-left text-gradient-main">
              Get To Know Us
            </h1>
            <p className="font-light text-brandSecondary">
              At PCI Construction, we are passionate about bringing your dreams
              to life. With our extensive experience and expertise in the
              construction industry, we have what it takes to turn your vision
              into reality.
            </p>
            <Button to="/contact" color="primary" className="relative z-10">
              Contact
            </Button>
          </div>
          <div className="flex justify-center items-center lg:w-6/12 h-full">
            <img
              className="relative top-8 h-[400px] md:h-[500px] lg:top-0 rounded-[2rem] w-full "
              src="/images/About/About-Hero-1.webp"
              alt="hero-main"
            />
          </div>
        </div>
        <div className="relative top-12 hidden lg:grid grid-cols-12 grid-rows-1 w-full gap-4 h-[300px]">
          <div className="w-[500px] aspect-square bg-brand z-[-2] rounded-3xl absolute left-[40%] bottom-20" />
          <img
            className="relative top-4 h-full rounded-[2rem] col-span-7 w-full object-cover"
            src="/images/About/About-Hero-2.webp"
            alt="hero-desktop-1"
          />
          <img
            className="h-full w-full rounded-[2rem] object-cover col-span-5"
            src="/images/About/About-Hero-3.webp"
            alt="hero-desktop-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
