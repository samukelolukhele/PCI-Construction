import React from "react";
import Button from "../../Button";

const About = () => {
  return (
    <div className="relative pt-12 -mb-12 flex flex-col lg:flex-row-reverse bg-brandBg lg:bg-white">
      <div className="flex container items-start flex-col gap-8 lg:h-[500px] lg:justify-center bg-brandBg pb-[200px] lg:pb-16 py-16  lg:pl-32 lg:rounded-l-lg">
        <p className="text-brand font-bold">About Us</p>
        <h1 className="header-text text-gradient-main">
          Experience you can count on
        </h1>
        <p className="text-brandSecondary font-light">
          Our team of experienced professionals have the expertise to bring even
          the most complex projects to life. With our years of experience and
          proven track record, we guarantee quality results that meet your
          expectations.
        </p>
        <Button color="outline" to="/about" className="w-full lg:w-max">
          Learn More
        </Button>
      </div>
      <img
        src="/images/Home-About.jpg"
        alt=""
        className="lg:relative absolute top-[680px] -mr-32 lg:top-8 object-cover h-[400px] lg:h-[500px] container rounded-[3.5rem]"
      />
    </div>
  );
};

export default About;
