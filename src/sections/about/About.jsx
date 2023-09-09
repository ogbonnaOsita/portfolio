/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import CircularProgress from "../../components/circularProgress/CircularProgress";
import "./index.css";

const About = () => {
  return (
    <div id="about" className="bg-brownAccent dark:bg-[#1a1a1a] py-[7rem]">
      <div className="max-w-[90%] md:max-w-[80%] mx-auto ">
        <div>
          <h2
            className={` mb-10 md:mb-[5rem] relative text-[3.5vw] font-extrabold text-secondary dark:text-[#fff] text-center uppercase stroke-[1rem] z-20 bg-clip-text
        before:content-['about_me'] before:text-[8vw] before:absolute  before:top-[50%] before:left-[50%] before:-translate-x-[50%] 
        before:-translate-y-[50%] before:text-center before:text-[#000] before:-z-[1] before:w-full before:opacity-30`}
          >
            About{" "}
            <span className={`text-primary dark:text-darkPrimary`}>me</span>
          </h2>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-8">
          <div className="image-box p-3 md:w-2/6 before:bg-primary dark:before:bg-darkPrimary">
            <img
              src="/man.jpeg"
              alt=""
              className="w-[100%] h-[100%] object-cover object-top  rounded-md "
            />
          </div>
          <div className="right md:w-4/6 text-secondary dark:text-gray-300">
            <p className="text-justify">
              Welcome to my corner of the web! 🌟 I'm a Web Developer
              well-versed in HTML, CSS, JavaScript, React, Node, Tailwind,
              GraphQL, Headless CMS, WordPress, and more. My passion lies in
              crafting exceptional web experiences, and I'm excited to bring
              your ideas to life with quality-driven solutions. Let's
              collaborate to make your online presence shine, turning your
              vision into a seamless reality. I'm dedicated to delivering
              top-tier services that leave a lasting impact. Join me on this web
              development journey!
            </p>
            <div className="grid sm:grid-cols-2 w-[100%] gap-2 justify-between md:justify-normal mt-5 md:text-sm text-sm">
              <div className="">
                <p>
                  <span className="text-primary dark:text-darkPrimary">
                    Nationality:{" "}
                  </span>{" "}
                  Nigeria
                </p>
                <p>
                  <span className="text-primary dark:text-darkPrimary">
                    Freelance:{" "}
                  </span>{" "}
                  Available
                </p>
              </div>
              <div className="">
                <p>
                  <span className="text-primary dark:text-darkPrimary">
                    Residence:{" "}
                  </span>{" "}
                  Lagos
                </p>
                <p>
                  <span className="text-primary dark:text-darkPrimary">
                    Email:{" "}
                  </span>{" "}
                  ogbonna.osita.21@gmail.com
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 gap-y-6 w-[100%] justify-between mt-5">
              <CircularProgress progress={90} text="HTML/css" />
              <CircularProgress progress={75} text="javascript" />
              <CircularProgress progress={82} text="react" />
              <CircularProgress progress={85} text="Nodejs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
