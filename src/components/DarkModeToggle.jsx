// import { ThemeContext } from "../../context/ThemeContext";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const {mode, setMode} = useContext(ThemeContext);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <div className="inline-block">
      <div
        className="w-[70px] h-[30px] rounded-2xl border dark:border-[#75e7ae70] border-[#77777770] flex items-center justify-between p-[4px] relative cursor-pointer"
        onClick={toggle}
      >
        <div className="text-[18px]">🌙</div>
        <div className="text-[18px]">🔆</div>
        <div
          className={`w-[24px] h-[24px] bg-primary dark:bg-darkPrimary rounded-full absolute transition ${
            mode === "light" ? "left-[4px]" : "right-[4px]"
          }`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
