import React from "react";
import Hire_Intro from "./Hire_intro";
import Final_form from "./Final_form";
const Hireme = () => {
  return (
    <div className="w-[100%]     flex items-center justify-center">
      <div
        className=" mt-12 
     md:w-[90%]"
      >
        <Hire_Intro />
        <Final_form />
      </div>
    </div>
  );
};

export default Hireme;
