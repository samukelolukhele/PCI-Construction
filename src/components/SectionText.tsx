import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

type SProps = {
  sectionName: string;
  header: string;
  headerColor?: "text-gradient-main" | "text-brandBg" | "text-white";
  headerSize?: "text-4xl" | "text-5xl" | "text-6xl" | "header-text" | string;
  children?: React.ReactNode;
  className?: string;
  animation?: string;
  animationDuration?: string;
  animationAnchor?: string;
  delay?: boolean;
};

const SectionText = ({
  sectionName,
  header,
  children,
  headerColor = "text-gradient-main",
  headerSize = "header-text",
  className,
  animation,
  animationDuration,
  animationAnchor,
  delay,
}: SProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className={`${className} flex flex-col gap-4`}
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-anchor={animationAnchor}
    >
      <h1 className="text-brand font-bold">{sectionName}</h1>
      <h1 className={`${headerColor} font-bold ${headerSize}`}>{header}</h1>
      <p data-aos-delay={delay ? "300" : "0"}>{children}</p>
    </div>
  );
};

export default SectionText;
