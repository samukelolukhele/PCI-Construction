import React from "react";
import Hero from "./Hero";
import Companies from "./Companies";
import About from "./About";
import Services from "./Services";
import Quote from "./Quote";
import WhyUs from "./WhyUs";
import ScrollToTop from "../../ScrollToTop";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Services />
      <Quote />
      <WhyUs />
      <ScrollToTop />
    </>
  );
};

export default Home;
