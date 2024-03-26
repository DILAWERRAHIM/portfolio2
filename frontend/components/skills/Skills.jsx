import React from "react";
import Node from "../Img/Node.png";
import Html from "../Img/Html.png";
import laravel from "../Img/Laravel.png";
import dg from "../Img/dg.png";
import typescript from "../Img/typescript.png";
import angular from "../Img/angular.png";

const Skills = () => {
  return (
    <div className="w-screen flex h-5/6  overflow-auto items-center justify-center">
      <div
        className="p-6 mt-12 justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center
     w-[90%] "
      >
        <div className="border-2  text-center my-2 p-3 flex flex-col justify-center items-center rounded-[10px]">
          <img
            src={Html}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />
          <p className="mb-3"> html</p>

          <p> 3 years experience </p>
        </div>

        <div className="border-2 text-center my-2  flex flex-col justify-center items-center   p-3  rounded-[10px]">
          <img
            src={Node}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />
          <p className="mb-3"> Node</p>

          <p> 3 years experience </p>
        </div>
        <div className="border-2 text-center my-2  flex flex-col justify-center items-center p-3  rounded-[10px]">
          <img
            src={typescript}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />

          <p className="mb-3"> Typescript </p>

          <p> 3 years experience </p>
        </div>
        <div className="border-2 text-center my-2  flex flex-col justify-center items-center p-3  rounded-[10px]">
          <img
            src={dg}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />
          <p className="mb-3"> Django </p>

          <p> 3 years experience</p>
        </div>
        <div className="border-2 text-center my-2  flex flex-col justify-center items-center p-3  rounded-[10px]">
          <img
            src={laravel}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />

          <p className="mb-3"> Laravel</p>

          <p> 5 years experience </p>
        </div>
        <div className="border-2 text-center  my-2 flex flex-col justify-center items-center p-3  rounded-[10px]">
          <img
            src={angular}
            alt="image is loading"
            className="my-2"
            height="20px"
            width="20px"
          />

          <p className="mb-3"> Angular</p>

          <p> 4 years experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
