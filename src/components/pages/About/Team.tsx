import React, { forwardRef } from "react";
import SectionText from "../../SectionText";

type TCProps = {
  img: string;
  name: string;
  role: string;
  children: React.ReactNode;
  className?: string;
};

const Team = forwardRef<HTMLDivElement>((_, ref) => {
  const cards: TCProps[] = [
    {
      img: "/images/Team/Testimonial-1.jpg",
      name: "Maggie Hill",
      role: "Chief Executive Officer",
      children:
        "I have always had a fascination of landmarks like the Eiffel Tower and The Statue of Liberty and that fascination quickly became a passion for engineering.",
    },
    {
      img: "/images/Team/Testimonial-2.jpg",
      name: "Liam Roberts",
      role: "Head Architect",
      children:
        "Desinging marvelous structures and seeing them come to life is why I love working with this company. There is no feeling like it.",
    },
    {
      img: "/images/Team/Testimonial-3.jpg",
      name: "Elena Faye",
      role: "Chief Financial Officer",
      children:
        "I have worked with many construction companies but never have I seen such robust cost manangement in projects. Seeing projects not exceed their budget is truly something unique to this company",
    },
  ];

  return (
    <div ref={ref} className="py-12 md:mb-12">
      <div className="container flex flex-col lg:flex-row-reverse md:justify-between gap-8">
        <SectionText
          header="Meet the A-Team"
          headerColor="text-brandBg"
          sectionName="Our Team"
          headerSize="text-4xl md:text-5xl"
          className="text-center lg:w-4/12 lg:text-left lg:sticky top-[24px] align-self h-min"
        >
          At PCI Construction, construction is not just a job for us - it's our
          passion. Our team consists of craftsmen who have honed their skills
          from birth, ensuring that every project we undertake is executed with
          the utmost precision and expertise. With years of experience and a
          passion for perfection, our team of skilled craftsmen bring your
          vision to life. From conceptualization to completion, every detail is
          meticulously crafted and executed with precision.
        </SectionText>
        <div className="flex flex-col lg:w-6/12 gap-12 md:gap-24">
          {cards.map((c, index) => (
            <TeamCard key={index} img={c.img} name={c.name} role={c.role}>
              {c.children}
            </TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
});

const TeamCard = ({ img, name, role, children, className }: TCProps) => (
  <div
    className={`relative flex flex-col  bg-cover bg-no-repeat bg-center ${className}`}
  >
    <img
      src={img}
      className="object-cover h-[300px] md:h-[450px] lg:aspect-square rounded-t-3xl md:rounded-3xl md:w-10/12 lg:w-full"
    />
    <div className="md:absolute md:w-6/12 bottom-[-50px] right-[-5px] lg:right-[-75px] p-8 bg-gradient-secondary flex flex-col rounded-b-3xl md:rounded-3xl">
      <h1 className="font-bold text-3xl md:text-2xl text-white">{name}</h1>
      <p className="font-semibold text-brandBg mb-2">{role}</p>
      <p className="text-gray-800">{children}</p>
    </div>
  </div>
);

export default Team;
