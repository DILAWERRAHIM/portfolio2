import React from "react";
import Image from "./image";
import Intro from "./intro";
const Shared_layout = () => {
  return (
    <div className="w-screen   flex h-5/6  overflow-auto items-center justify-center">
      <div
        className="p-6  mt-12 justify-center grid grid-cols-1 md:grid-cols-4 gap-4 items-center
     md:w-[90%]"
      >
        <Intro />
        <Image />
      </div>
    </div>
  );
};

export default Shared_layout;
