import React from "react";
import Hero from "./Hero";
import Companies from "./Companies";
import About from "./About";
import Services from "./Services";
import Quote from "./Quote";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <About />
      <Services />
      <Quote />
      <WhyUs />
    </div>
  );
};

export default Home;
