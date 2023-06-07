import React from "react";
import Service from "./Service";
import Hero from "./Hero";
import Description from "./Description";

const Services = () => {
  return (
    <div className="flex flex-col md:gap-24">
      <Hero />
      <Description />
      <Service
        img="/images/Home-Service-1.jpg"
        direction="md:flex-row"
        header="Architecture"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        obcaecati nesciunt illo quod, beatae id officiis doloribus reiciendis
        perferendis fuga dolorum, voluptatem vero impedit provident maxime
        laboriosam repellat dolores. Laudantium!
      </Service>
      <Service
        img="/images/Home-Service-2.jpg"
        direction="md:flex-row-reverse"
        header="Welding"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        obcaecati nesciunt illo quod, beatae id officiis doloribus reiciendis
        perferendis fuga dolorum, voluptatem vero impedit provident maxime
        laboriosam repellat dolores. Laudantium!
      </Service>
      <Service
        img="/images/Home-Service-3.jpg"
        direction="md:flex-row"
        header="Construction"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        obcaecati nesciunt illo quod, beatae id officiis doloribus reiciendis
        perferendis fuga dolorum, voluptatem vero impedit provident maxime
        laboriosam repellat dolores. Laudantium!
      </Service>
      <Service
        img="/images/Home-Service-4.jpg"
        direction="md:flex-row"
        header="Welding"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
        obcaecati nesciunt illo quod, beatae id officiis doloribus reiciendis
        perferendis fuga dolorum, voluptatem vero impedit provident maxime
        laboriosam repellat dolores. Laudantium!
      </Service>
    </div>
  );
};

export default Services;
