import React from "react";
import Image from "./Image";
import Intro from "./Intro";
const Shared_layout = () => {
  return (
    <div className="w-[100%]     flex h-5/6  overflow-auto items-center justify-center">
      <div
        className="bg-[#A51C30]  mt-12 justify-center grid grid-cols-1 md:grid-cols-6 gap-4 items-center
     md:w-[90%]"
      >
        <Intro />
        <Image />
      </div>
    </div>
  );
};

export default Shared_layout;
