import React from "react";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white lg:items-center lg:justify-between bg-brandBg rounded-b-[2rem] lg:h-[580px] ">
      <div className="flex text-center lg:text-left flex-col items-center lg:items-start gap-6 container py-4 lg:w-10/12">
        <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-brandSecondary  to-white font-bold">
          Building The Future
        </h1>
        <p className="font-light text-brandSecondary text-xl lg:w-9/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quidem neque, odit labore aut praesentium impedit enim, quam, amet
          aspernatur facilis ad! Aspernatur, obcaecati nobis molestiae dolorem
          quae minima omnis.
        </p>
        <Button
          to="/services"
          color="primary"
          className="w-full lg:w-[160px] md:w-6/12"
        >
          Services
        </Button>
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
