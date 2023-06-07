import React from "react";
import { BsBuildingFillCheck, BsFillPersonLinesFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import IconWidget, { IProps } from "../../IconWidget";

const Description = () => {
  const services: IProps[] = [
    {
      iconBg: "bg-none",
      iconClassName: "text-6xl",
      header: "ISO Standards",
      Icon: BsBuildingFillCheck,
      className: "!bg-none [&>*]:!text-black text-center",
      children: (
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nihil
          odit voluptas aut dolores harum dolore facilis! Ratione, aspernatur
          minus, iure rem laboriosam corporis cumque accusantium sapiente fuga
          nam reiciendis.
        </p>
      ),
    },
    {
      iconBg: "bg-none",
      iconClassName: "text-6xl",
      header: "ISO Standards",
      Icon: BsBuildingFillCheck,
      children: (
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nihil
          odit voluptas aut dolores harum dolore facilis! Ratione, aspernatur
          minus, iure rem laboriosam corporis cumque accusantium sapiente fuga
          nam reiciendis.
        </p>
      ),
    },
    {
      iconBg: "bg-none",
      iconClassName: "text-6xl",
      header: "ISO Standards",
      Icon: BsBuildingFillCheck,
      children: (
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nihil
          odit voluptas aut dolores harum dolore facilis! Ratione, aspernatur
          minus, iure rem laboriosam corporis cumque accusantium sapiente fuga
          nam reiciendis.
        </p>
      ),
    },
  ];

  return (
    <div className="py-12">
      <div className="container flex justify-evenly items-center">
        {services.map((s, index) => (
          <IconWidget
            key={index}
            header={s.header}
            iconBg={s.iconBg}
            className={s.className}
            iconClassName={s.iconClassName}
            Icon={s.Icon}
          >
            {s.children}
          </IconWidget>
        ))}
      </div>
    </div>
  );
};

export default Description;
