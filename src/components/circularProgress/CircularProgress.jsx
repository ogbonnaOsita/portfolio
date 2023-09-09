/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context/ThemeContext";

const CircularProgress = ({ progress = 85, text = "html" }) => {
  const { mode } = useContext(ThemeContext);
  let color;
  if (mode === "dark") {
    color = "#4bffa5";
  } else {
    color = "#F59E00";
  }
  return (
    <div className="progress-container">
      <div
        className="`
      progress w-[100px] h-[100px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px]
      
      "
        style={{ "--i": progress, "--clr": color }}
      >
        <h3 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:text-[1.2rem] lg:text-[2rem] z-10 font-[500]">
          {progress}
          <span className="text-[0.65em] font-[500]">%</span>
        </h3>
        <h4 className="absolute top-[62%] left-[50%] text-[0.7rem] md:text-[0.65rem] lg:text-[0.85rem] -translate-x-[50%] z-10 font-[500] text-primary dark:text-darkPrimary uppercase">
          {text}
        </h4>
      </div>
    </div>
  );
};

export default CircularProgress;
