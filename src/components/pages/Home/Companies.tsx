import React from "react";

const Companies = () => {
  return (
    <div className="flex flex-col items-center gap-14 justify-center pt-36 pb-16">
      <h1 className="container font-bold text-6xl text-center">Featured On</h1>
      <div className="container grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 lg:gap-12 items-center justify-items-center lg:justify-center gap-4 [&>img]:w-32 lg:[&>img]:w-48">
        <img className="text-white" src="/images/Logos/Forbes.svg" alt="" />
        <img className="text-white" src="/images/Logos/Bloomberg.svg" alt="" />
        <img className="text-white" src="/images/Logos/Fortune.svg" alt="" />
        <img className="text-white " src="/images/Logos/Time.svg" alt="" />
      </div>
    </div>
  );
};

export default Companies;
