import React, { useEffect } from "react";
import Button from "../../Button";
import {
  BsFillCalculatorFill,
  BsFillBuildingFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import IconWidget from "../../IconWidget";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const widgets = [
    {
      iconBg: "bg-yellow-400",
      Icon: BsFillCalculatorFill,
      header: "Affordable Solutions",
      text: "We provide affordable quality construction services",
    },
    {
      iconBg: "bg-green-900",
      Icon: BsFillBuildingFill,
      header: "Fast Completion",
      text: "We take pride in our fast yet reliable processes to ensure that any deadline is met",
    },
    {
      iconBg: "bg-indigo-700",
      Icon: BsFillPeopleFill,
      header: "Best Experts",
      text: "Our team of highly qualified experts allow us to provide the best service in the industry.",
    },
  ];

  return (
    <div className="flex flex-col container mx-auto py-10 gap-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:text-left lg:items-center text-center justify-between">
        <div className="flex flex-col gap-4 lg:w-7/12">
          <p className="text-brand font-bold">OUR PROCESS</p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-brandBg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            How We Consistently Provide Excellence
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
            We believe that collaboration is key to a successful construction
            project. Our team of experienced professionals will work closely
            with you from the initial planning stages to completion, ensuring
            that your needs and preferences are met every step of the way.
          </p>
        </div>
        <Button
          to="/about"
          color="primary"
          className="lg:w-min lg:h-min lg:px-16 flex items-center gap-4 justify-center"
        >
          About
          <AiOutlineArrowRight />
        </Button>
      </div>
      <div className="gap-4 flex flex-col lg:flex-row text-center">
        {widgets.map((widget, key) => (
          <IconWidget
            key={key}
            Icon={widget.Icon}
            iconBg={widget.iconBg}
            header={key + 1 + ". " + widget.header}
            iconClassName="text-2xl"
          >
            {widget.text}
          </IconWidget>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
