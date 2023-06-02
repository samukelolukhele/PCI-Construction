import React, { useRef } from "react";
import Hero from "./Hero";
import Story from "./Story";
import Mission from "./Mission";
import Values from "./Values";

const About = () => {
  const valuesRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Hero />
      <Story valuesRef={valuesRef} />
      <Mission />
      <Values ref={valuesRef} />
    </div>
  );
};

export default About;
