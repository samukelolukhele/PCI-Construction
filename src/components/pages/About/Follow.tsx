import React from "react";
import SectionText from "../../SectionText";

const Follow = () => {
  return (
    <div className="py-12">
      <div className="container flex flex-col  gap-8">
        <SectionText
          sectionName="Follow Us"
          header="Follow our work on Instagram"
          headerColor="text-brandBg"
          headerSize="text-5xl lg:text-6xl"
          animation="fade-up"
          animationDuration="1000"
        >
          Check out our current and previous projects or just drop by to say hi!
        </SectionText>
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 [&>img]:rounded-xl gap-4 lg:gap-8">
          <img
            src="/images/About/About-Follow-1.webp"
            className="aspect-square col-span-2 row-span-2 w-full"
          />
          <img
            src="/images/About/About-Follow-2.webp"
            className="aspect-square w-full"
          />
          <img
            src="/images/About/About-Follow-3.webp"
            className="aspect-square w-full"
          />
          <img
            src="/images/About/About-Follow-4.webp"
            className="aspect-square w-full"
          />
          <img
            src="/images/About/About-Follow-5.webp"
            className="aspect-square w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Follow;
