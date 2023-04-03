import React from "react";
import Button from "../../Button";

const About = () => {
  return (
    <div className="relative pt-12 md:mb-[400px] lg:mb-28 flex flex-col lg:flex-row-reverse bg-brandBg lg:bg-white mb-[280px] w-full">
      <div className="flex container items-start flex-col gap-8 lg:h-[500px] lg:justify-center bg-brandBg pb-[200px] lg:pb-16 py-16  lg:pl-32 lg:rounded-l-lg">
        <p className="text-brand font-bold">About Us</p>
        <h1 className="header-text text-5xl lg:text-5xl text-gradient-main">
          Experience you can count on
        </h1>
        <p className="text-brandSecondary font-light">
          Our team of experienced professionals have the expertise to bring even
          the most complex projects to life. With our years of experience and
          proven track record, we guarantee quality results that meet your
          expectations.
        </p>
        <Button
          color="outline"
          to="/about"
          className="w-full lg:w-max md:w-6/12 mx-auto lg:mx-0"
        >
          Learn More
        </Button>
      </div>
      <div className="lg:relative flex items-center px-10 justify-center absolute top-[660px] border-separate border-radius-perspective overflow-hidden lg:top-8 md:top-[470px] h-[400px] md:h-[540px] lg:h-[500px] w-full rounded-[2rem] md:!mx-auto lg:!-mr-32">
        <img
          src="/images/Home-About.jpg"
          alt=""
          className="h-full w-full border-separate overflow-hidden border-radius-perspective !rounded-[2rem] object-cover"
        />
      </div>
    </div>
  );
};

export default About;
