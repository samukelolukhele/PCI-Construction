import React from "react";
import Button from "../../Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const Quote = () => {
  return (
    <div className="relative overflow-hidden z-[1] flex flex-col gap-4 justify-end rounded-b-[2rem] md:rounded-[2rem] container mx-auto bg-[url(/images/Home-Quote-Bg.jpg)] bg-cover bg-center bg-no-repeat h-screen md:h-[70vh] lg:h-screen mb-16">
      <div className="absolute z-[2] inset-0 bg-black opacity-60" />
      <div className="flex mx-2 lg:mx-0 flex-col gap-4 z-10 lg:w-8/12">
        <p className="text-brand font-bold z-10">GET A QUOTE</p>
        <h1 className="md:text-6xl font-bold text-4xl text-white z-10">
          We can help you with your building project today
        </h1>
        <p className="font-light text-white z-10">
          A Commitment to safety is our top priority. We adhere to strict safety
          protocols and ensure that all our construction sites are safe for both
          our workers and clients. You can have peace of mind knowing that your
          project is being handled with utmost care and attention to safety.
        </p>
      </div>
      <div className="flex mx-2 lg:mx-0 flex-col md:flex-row gap-4 mb-10 relative z-10">
        <Button
          color="secondary"
          className="flex items-center justify-center text-white bg-brandBgSecondary gap-4"
          to="/contact"
        >
          {" "}
          Get a quote <AiOutlineArrowRight />{" "}
        </Button>

        <Button to="/about" color="outline">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Quote;
