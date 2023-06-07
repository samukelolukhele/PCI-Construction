import React from "react";
import Button from "../../Button";

type SProps = {
  direction: "md:flex-row" | "md:flex-row-reverse";
  img: string;
  header: string;
  children: React.ReactNode;
};

const Service = ({
  direction = "md:flex-row",
  img,
  header,
  children,
}: SProps) => {
  return (
    <div className={`relative w-full flex flex-col items-center ${direction}`}>
      <img
        src={img}
        alt=""
        className={`sticky z-0 top-0 h-[300px] object-fit w-full lg:h-[500px] ${
          direction === "md:flex-row"
            ? "md:mr-[-400px] md:rounded-r-3xl"
            : "md:ml-[-400px] md:rounded-l-3xl"
        }`}
      />
      <div
        className={`relative z-[1] flex flex-col gap-4 p-8 bg-brandSecondary md:w-6/12 md:h-4/5 md:rounded-3xl ${
          direction === "md:flex-row" ? "md:mr-10" : "md:ml-10"
        }`}
      >
        <h1 className="text-brandBg font-bold text-5xl">{header}</h1>
        <p className="text-black">{children}</p>
        <Button to="/contact" color="primary" className="mt-8">
          Get a quote
        </Button>
      </div>
    </div>
  );
};

export default Service;
