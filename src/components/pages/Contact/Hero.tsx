import React from "react";
import SectionText from "../../SectionText";
import IconWidget from "../../IconWidget";
import { BsPhone } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="pb-12 mb-44 bg-brandBg rounded-b-3xl">
      <div className="container flex flex-col gap-8 mb-[-200px]">
        <SectionText
          sectionName="Get In Touch"
          header="Contact us today!"
          className="text-center [&>p]:text-white"
        >
          We would love to hear about your project. Give us a call and speak
          with one of our friendly representatives or just send us an email with
          details about your project and one of our staff will get back to you
          as soon as possible. We look forward to hearing from you.
        </SectionText>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
          <IconWidget
            Icon={AiFillMail}
            iconBg="bg-orange-500"
            header="Send us an email"
            iconClassName="text-4xl"
            className="text-center text-sm bg-gradient-secondary !px-4 !py-12 md:!px-8 md:!py-8 rounded-3xl"
          >
            <p>
              Our staff will get back to you as soon as they have the chance.
            </p>
            <a
              href="mailto:info@pciconstruction.com"
              className="py-4 px-2 text-center bg-brandBg [&>p]:font-bold rounded-lg duration-500 hover:bg-brandBgSecondary cursor-pointer hover:translate-y-[-0.4rem]"
            >
              <p className="text-white text-base">info@pciconstruction.com</p>
            </a>
          </IconWidget>
          <IconWidget
            Icon={BsPhone}
            iconBg="bg-purple-500"
            header="Give us a call"
            iconClassName="text-4xl"
            className="text-center text-sm bg-gradient-secondary !px-4 !py-12 md:!px-8 md:!py-8 rounded-3xl"
          >
            <p>
              Speak to one of our friendly representatives. (Office hours
              apply.)
            </p>
            <a
              href="tel:(202)555-0173"
              className="py-4 px-2 text-center bg-brandBg [&>p]:font-bold rounded-lg duration-500 hover:bg-brandBgSecondary cursor-pointer hover:translate-y-[-0.4rem]"
            >
              <p className="text-white text-base">(202)555-0173</p>
            </a>
          </IconWidget>
        </div>
      </div>
    </div>
  );
};

export default Hero;
