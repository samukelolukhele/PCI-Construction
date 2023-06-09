import React, { useRef } from "react";
import Hero from "./Hero";
import Story from "./Story";
import Mission from "./Mission";
import Values from "./Values";
import Team from "./Team";
import Follow from "./Follow";
import ScrollToTop from "../../ScrollToTop";

const About = () => {
  const teamRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Hero />
      <Story teamRef={teamRef} />
      <Mission valuesRef={valuesRef} />
      <Team ref={teamRef} />
      <Values ref={valuesRef} />
      <Follow />
      <ScrollToTop />
    </div>
  );
};

export default About;
