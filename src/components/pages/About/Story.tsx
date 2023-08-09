import React, { useRef } from "react";
import Button, { BasicButton } from "../../Button";

type SProps = {
  teamRef: React.MutableRefObject<HTMLElement | any>;
};

const Story = ({ teamRef }: SProps) => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/6 gap-8 flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="text-brand font-bold">Our Story</h1>
              <h1 className="text-brandBg font-bold header-text">
                Craftsmen by Birth
              </h1>
              <p className="font-light">
                Quality is at the forefront of everything we do. From selecting
                the finest materials to employing advanced construction
                techniques, we leave no stone unturned in ensuring that every
                aspect of your project meets and exceeds your expectations.
              </p>
            </div>
            <div className="relative">
              <div className="absolute bottom-[-20px] left-[-100px] rounded-3xl h-[350px] w-[300px] md:w-[700px] lg:w-[500px] hidden lg:block bg-brand" />

              <img
                className="relative z-[1] w-full h-[400px] md:h-[600px] object-cover rounded-3xl"
                src="/images/About-Story-1.jpg"
              />
            </div>
          </div>
          <div className="lg:w-3/6 flex flex-col gap-8 lg:flex-col-reverse justify-between">
            <div className="flex gap-8 lg:flex-col flex-col-reverse">
              <p className="font-light">
                Whether you're envisioning a residential masterpiece or a
                commercial landmark, PCI Construction has the experience and
                skillset to turn your dreams into reality. We take pride in our
                ability to bring even the most complex projects to life while
                maintaining the highest standards of quality.
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Button to="/contact" color="primary">
                  Contact us
                </Button>
                <BasicButton
                  color="outline-dark"
                  onClick={() =>
                    teamRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Meet our team
                </BasicButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-[-20px] left-[-100px] rounded-3xl h-[350px] w-[300px] md:w-[700px] lg:hidden bg-brand" />
              <img
                className="relative z-[1] w-full h-[400px] md:h-[600px] object-cover rounded-3xl"
                src="/images/About-Story-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
