import React from "react";
import Button from "../../Button";
import {
  BsFillCalculatorFill,
  BsFillBuildingFill,
  BsFillClipboardDataFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import IconWidget from "../../IconWidget";

const WhyUs = () => {
  const widgets = [
    {
      iconBg: "bg-yellow-400",
      Icon: BsFillCalculatorFill,
      header: "Affordable Solutions",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus quisquam repellendus maxime.",
    },
    {
      iconBg: "bg-green-900",
      Icon: BsFillBuildingFill,
      header: "Fast Completion",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus quisquam repellendus maxime.",
    },
    {
      iconBg: "bg-indigo-700",
      Icon: BsFillPeopleFill,
      header: "Best Experts",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus quisquam repellendus maxime.",
    },
  ];

  return (
    <div className="flex flex-col container mx-auto py-10 gap-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:text-left lg:items-center text-center justify-between">
        <div className="flex flex-col gap-4 lg:w-7/12">
          <p className="text-brand font-bold">OUR PROCESS</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-brandBg">
            How We Consistently Provide Excellence
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            id neque. Quam, praesentium reiciendis ad animi cum, reprehenderit
            aspernatur esse nihil eum obcaecati dolor ab placeat qui recusandae
            sit vel.
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
