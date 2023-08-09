import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import React, { forwardRef, useState } from "react";
import useMedia from "../../hooks/useMedia";
import SectionText from "../../SectionText";
import { IconType } from "react-icons";
import IconWidget from "../../IconWidget";
import {
  BsFillShieldFill,
  BsFillCalendar2DateFill,
  BsPatchCheckFill,
  BsPersonCircle,
} from "react-icons/bs";

type VSProps = {
  Icon: IconType;
  iconBg: string;
  iconClassName?: string;
  children: React.ReactNode;
  heading: string;
  className?: string;
};

const Values = forwardRef<HTMLDivElement>((_, scrollRef) => {
  const [position, setPosition] = useState(0);
  const { isMobile } = useMedia();

  const slides: VSProps[] = [
    {
      Icon: BsFillShieldFill,
      iconBg: "bg-yellow-500",
      heading: "Safety",
      children:
        "Safety is our first priority before undertaking any project. We take pride in our lack of accidents and incidents and we strive to protect everyone employed by us.",
    },
    {
      Icon: BsFillCalendar2DateFill,
      iconBg: "bg-teal-500",
      heading: "Deadlines",
      children:
        "We understand the time constraints that come with construction. That's why we employ the best in the industry to provide you with the fastest solutions to ensure your deadlines are met.",
    },
    {
      Icon: BsPatchCheckFill,
      iconBg: "bg-indigo-500",
      heading: "Quality Assurance",
      children:
        "We use ISO9000 standards in all our projects so you can be confident you are receiving only the best construction quality that is designed to stand the test of time.",
    },
    {
      Icon: BsPersonCircle,
      iconBg: "bg-green-500",
      heading: "Client Focused",
      children:
        "We take pride in providing our clients with solutions that result in their vision being fully met.",
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
    <div ref={scrollRef} className="py-12 bg-brandBg rounded-3xl">
      <div className="container gap-8 flex flex-col overflow-hidden">
        <div className="flex items-center flex-col gap-4 md:flex-row md:justify-between">
          <SectionText
            className="w-9/12"
            sectionName="Our Values"
            header="The values we carry through our work"
            headerSize="text-4xl md:text-5xl"
          ></SectionText>
          {!isMobile && (
            <div className="relative flex items-center justify-center gap-8 bottom-0">
              <button className="btn-arrow-alt" onClick={onBack}>
                <MdArrowBackIos />
              </button>
              <button className="btn-arrow-alt" onClick={onNext}>
                <MdArrowForwardIos />
              </button>
            </div>
          )}
        </div>
        <div
          className={`w-full relative flex gap-12 transition-transform duration-300`}
          style={{
            transform: isMobile
              ? `translateX(-${position * 350}px)`
              : `translateX(-${position * 25}%)`,
          }}
        >
          {slides.map((sl, index) => (
            <ValueSlide
              key={index}
              heading={sl.heading}
              iconClassName="text-4xl"
              className="relative bg-slate-100 !items-start min-w-[300px] lg:min-w-[550px] rounded-3xl"
              Icon={sl.Icon}
              iconBg={sl.iconBg}
            >
              {sl.children}
            </ValueSlide>
          ))}
        </div>
        {isMobile && (
          <div className="relative flex items-center justify-center gap-8 bottom-0">
            <button className="btn-arrow-alt" onClick={onBack}>
              <MdArrowBackIos />
            </button>
            <button className="btn-arrow-alt" onClick={onNext}>
              <MdArrowForwardIos />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

const ValueSlide = ({
  className,
  Icon,
  iconClassName,
  heading,
  iconBg,
  children,
}: VSProps) => (
  <IconWidget
    iconClassName={iconClassName}
    className={`${className}`}
    header={heading}
    Icon={Icon}
    iconBg={iconBg}
  >
    {children}
  </IconWidget>
);

export default Values;
