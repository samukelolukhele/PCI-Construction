import React from "react";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white lg:items-center lg:justify-between bg-gradient-main rounded-b-[2rem] lg:h-[580px] ">
      <div className="flex text-left lg:text-left flex-col items-start gap-6 container py-4 lg:w-10/12">
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-brandSecondary  to-white font-bold">
          Building The Future
        </h1>
        <p className="font-light text-brandSecondary text-xl lg:w-9/12">
          With a commitment to excellence, we pride ourselves on delivering
          top-notch craftsmanship in every project we undertake. From the
          foundation to the finishing touches, we pay attention to every detail
          to ensure that the end result is nothing short of exceptional.
        </p>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <Button
            to="/contact"
            color="primary"
            className="w-full mx-auto lg:mx-0 lg:w-[180px] md:w-6/12"
          >
            Contact
          </Button>
          <Button
            to="/about"
            color="outline"
            className="w-full mx-auto lg:mx-0 lg:w-[180px] md:w-6/12"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="container">
        <img
          src="/images/Home-Hero-2.jpg"
          alt=""
          className="relative object-cover w-full h-[400px] md:h-[450px] lg:h-[570px] top-12 rounded-[2rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
