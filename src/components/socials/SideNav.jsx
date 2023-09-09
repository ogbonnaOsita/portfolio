// import React from "react";

import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

const SideNav = () => {
  return (
    <div className="fixed hidden lg:block top-[40%] right-0 z-50 px-3 bg-[#1b1b1b] py-5 rounded-l-2xl shadow-2xl">
      <div>
        <div className="flex gap-3 flex-col">
          <Github />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
