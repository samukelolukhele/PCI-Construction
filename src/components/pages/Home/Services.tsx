import React, { useState } from "react";
import { FaHammer, FaPencilAlt, FaPaintRoller } from "react-icons/fa";
import { SiSparkfun } from "react-icons/si";
import ServiceSlide from "./ServiceSlide.component";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import useMedia from "../../hooks/useMedia";

const Services = () => {
  const [position, setPosition] = useState(0);

  const { isMobile } = useMedia();

  const slides = [
    {
      image: "/images/Home-Service-3.jpg",
      Icon: FaHammer,
      text: "Our team of expert engineers will ensure nothing but the most exceptional results.",
      heading: "Building",
    },
    {
      image: "/images/Home-Service-1.jpg",
      heading: "Planning",
      Icon: FaPencilAlt,
      text: "With our team of architects we will ensure nothing but the highest quality design plans for your project.",
    },
    {
      image: "/images/Home-Hero.jpg",
      heading: "Designing",
      Icon: FaPaintRoller,
      text: "We will assist with desing to ensure you get the best result out of your project.",
    },
    {
      image: "/images/Home-Service-1.jpg",
      heading: "Welding",
      Icon: SiSparkfun,
      text: "We provide the best welding services. We use ISO9000 standards so you can be sure of the highest quality service.",
    },
  ];

  const onBack = () => {
    if (isMobile)
      return setPosition((pos) => (pos === 0 ? slides.length - 1 : pos - 1));

    return setPosition((pos) => (pos === 0 ? slides.length : pos - 2));
  };

  const onNext = () => {
    if (isMobile)
      return setPosition((pos) => (pos === slides.length - 1 ? 0 : pos + 1));

    return setPosition((pos) => (pos === slides.length ? 0 : pos + 2));
  };

  return (
    <div className="container pt-30 flex flex-col gap-4 overflow-hidden my-20">
      <div className="flex flex-col gap-4 justify-center text-brandBg lg:w-6/12">
        <p className="font-bold text-brand">Our Services</p>
        <h1 className="header-text">High Quality Services</h1>
        <p>
          At PCI Construction, we are passionate about bringing your dreams to
          life. With our extensive experience and expertise in the construction
          industry, we have what it takes to turn your vision into reality.
        </p>
      </div>
      <div
        className={`w-full relative flex gap-12 transition-transform duration-300`}
        style={{
          transform: isMobile
            ? `translateX(-${position * 350}px)`
            : `translateX(-${position * 25}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <ServiceSlide
            key={index}
            heading={slide.heading}
            image={slide.image}
            Icon={slide.Icon}
          >
            {slide.text}
          </ServiceSlide>
        ))}
      </div>
      <div className="relative flex items-center justify-center gap-8 bottom-0">
        <button className="btn-arrow" onClick={onBack}>
          <MdArrowBackIos />
        </button>
        <button className="btn-arrow" onClick={onNext}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Services;
