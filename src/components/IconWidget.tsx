import React from "react";
import { IconType } from "react-icons";

type IProps = {
  Icon: IconType;
  iconBg: string;
  header: string;
  iconClassName?: string;
  className?: string;
  children: React.ReactNode;
};

const IconWidget = ({
  Icon,
  iconBg,
  iconClassName,
  header,
  children,
  className,
}: IProps) => {
  return (
    <div
      className={`${className} w-full flex flex-col items-center justify-center gap-4 px-8 py-8 bg-brandSecondary rounded-lg`}
    >
      <div className={`p-4 ${iconBg} rounded-full text-white`}>
        <Icon className={iconClassName} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-brandBg">{header}</h1>
        <div className="font-extralight text-brandBg flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IconWidget;
