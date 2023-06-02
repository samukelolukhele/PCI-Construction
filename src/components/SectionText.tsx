import React from "react";

type SProps = {
  sectionName: string;
  header: string;
  headerColor?: "text-gradient-main" | "text-brandBg" | "text-white";
  headerSize?: "text-4xl" | "text-5xl" | "text-6xl" | "header-text" | string;
  children?: React.ReactNode;
  className?: string;
};

const SectionText = ({
  sectionName,
  header,
  children,
  headerColor = "text-gradient-main",
  headerSize = "header-text",
  className,
}: SProps) => {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      <h1 className="text-brand font-bold">{sectionName}</h1>
      <h1 className={`${headerColor} font-bold ${headerSize}`}>{header}</h1>
      <p className="font-light">{children}</p>
    </div>
  );
};

export default SectionText;
