import React from "react";
import Button from "../../Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div className="flex flex-col gap-4 lg:w-5/12 items-center lg:items-start container">
        <h1 className="header-text">Oops! Page Not Found</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          odit.
        </p>
        <Button
          to="/"
          color="secondary"
          className="flex items-center justify-center w-full lg:w-fit"
        >
          Back To Home Page
          <AiOutlineArrowRight />
        </Button>
      </div>
      <div className="bg-[url(/images/404.svg)] bg-contain bg-center bg-no-repeat h-[450px] container w-10/12 lg:w-full lg:h-[80vh]" />
    </div>
  );
};

export default NotFound;
