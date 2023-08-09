import React from "react";
import SectionText from "../../SectionText";
import Button, { BasicButton } from "../../Button";

type MProps = {
  valuesRef: React.MutableRefObject<HTMLDivElement | null>;
};

type MSProps = {
  spanText: string;
  header: string;
  headerSpanReverse?: boolean;
  children: React.ReactNode;
};

const Mission = ({ valuesRef }: MProps) => {
  return (
    <div className="py-12 md:pb-24 my-12 bg-brandBg rounded-3xl" id="#mission">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col lg:w-6/12 gap-8">
          <SectionText
            header="We Strive For Excellence"
            headerSize="text-5xl md:text-6xl"
            sectionName="Our Mission"
            className="md:text-center lg:text-left"
          >
            When you choose PCI Construction, you're not just choosing a
            construction company - you're choosing a partner who is dedicated to
            building a future that stands the test of time. Join us on this
            journey as we shape the world one project at a time.
          </SectionText>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center lg:justify-start">
            <Button to="/contact" color="primary">
              Contact us
            </Button>
            <BasicButton
              color="outline"
              onClick={() =>
                valuesRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Values
            </BasicButton>
          </div>
        </div>
        <div className="flex md:items-center md:justify-center w-full lg:w-fit flex-col md:flex-row gap-2 md:gap-8">
          <div className="relative md:top-12 flex flex-col md:items-stretch gap-2 md:gap-8">
            <MissionSquare spanText="+" header="20">
              Years of Experience
            </MissionSquare>
            <MissionSquare spanText="+" header="300">
              Employees
            </MissionSquare>
          </div>
          <div className="flex flex-col gap-2 md:gap-8">
            <MissionSquare spanText="%" header="100" headerSpanReverse>
              Client Satisfaction
            </MissionSquare>
            <MissionSquare spanText="+" header="120">
              Projects Done
            </MissionSquare>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionSquare = ({
  spanText,
  header,
  headerSpanReverse = false,
  children,
}: MSProps) => {
  return (
    <div
      className="bg-white text-brandBg flex flex-col justify-center 
      py-4 rounded-xl items-center 
      min-w-full md:py-16 lg:aspect-square md:min-w-[300px]
      lg:min-w-[200px]"
    >
      <h1
        className={`text-4xl  font-bold flex ${
          headerSpanReverse && "flex-row-reverse"
        }`}
      >
        <span className="text-brandBgSecondary font-light">{spanText}</span>
        {header}
      </h1>
      <p className="font-light">{children}</p>
    </div>
  );
};

export default Mission;
