import React from "react";

const PortfolioCard = ({ image, title, caption }) => {
  return (
    <div className="h-[15rem] md:h-[20rem] 2xl:h-[30rem] overflow-hidden cursor-pointer">
      <div className="overflow-hidden h-[85%] w-full">
        <img
          src={image}
          alt=""
          className="hover:scale-105 hover:rotate-1 hover:opacity-75 transition-all duration-300 h-full w-full object-fit object-top"
        />
      </div>
      <div className="bg-black px-5 md:px-10 sm:px-6 lg:px-19 h-[15%] text-gray-300">
        <div className="flex justify-between items-center h-[100%]">
          <h2 className="text-primary dark:text-darkPrimary text-base lg:text-2xl font-bold">
            {title}
          </h2>
          <h3 className="italic text-sm lg:text-base"> - {caption}</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
