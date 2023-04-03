import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type SProps = {
  image: string;
  Icon: IconType;
  children: React.ReactNode;
  heading: string;
};

const ServiceSlide = ({ image, Icon, children, heading }: SProps) => {
  return (
    <motion.div className="relative min-w-[300px] lg:min-w-[550px] flex flex-col gap-4 items-center ">
      <img
        src={image}
        alt=""
        className="h-[250px] lg:h-[400px] lg:-mb-44 min-w-full rounded-lg"
      />
      <div className="flex flex-col mr-auto gap-4 p-4 bg-[#BDCDD6] rounded-lg w-full lg:w-10/12 lg:ml-4">
        <div className="w-min p-4 text-4xl rounded-full bg-brandBgSecondary text-white">
          {Icon && <Icon />}
        </div>
        <h1 className="text-2xl font-bold text-brandBg">{heading}</h1>
        <p className="text-brandBg font-light">{children}</p>
      </div>
    </motion.div>
  );
};

export default ServiceSlide;
