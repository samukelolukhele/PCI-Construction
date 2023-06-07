import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../../Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse rounded-b-3xl">
      <div className="bg-gradient-main lg:w-7/12 flex items-center">
        <div className="container flex flex-col items-start justify-start lg:ml-12 gap-8 py-8">
          <h1 className="text-4xl font-bold text-gradient-main">
            Experts in {"  "}
            <TypeAnimation
              sequence={[
                1000,
                "Architecture",
                1000,
                "Welding",
                1000,
                "Construction",
                1000,
                "City Planning",
                2000,
                "Logistics",
              ]}
              cursor
              repeat={Infinity}
            />
          </h1>
          <p className="md:w-8/12 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            deserunt, adipisci temporibus exercitationem repellendus doloribus
            in nihil velit? Deleniti nisi ut exercitationem! Numquam autem
            eveniet quisquam eos ullam aliquid reiciendis!
          </p>
          <Button to="/contact" color="outline">
            Contact
          </Button>
        </div>
      </div>
      <img
        src="/images/Services-Hero.jpg"
        className="h-[300px] lg:h-[80vh] w-full lg:w-5/12 object-cover"
      />
    </div>
  );
};

export default Hero;
