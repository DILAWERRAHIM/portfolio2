import React from "react";

const Hire_Intro = () => {
  return (
    <div>
      <div
        className=" flex flex-col justify-center mx-auto items-center
     md:w-[80%] w-[95%]"
      >
        <h2
          style={{
            fontFamily: "'Madimi One',sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "40px",
          }}
        >
          {" "}
          Hire me{" "}
        </h2>
        <p className="text-2xl mt-7">
          “I believe people choose to work with me because I excel at what I’m
          passionate about."
        </p>
        <p className="mt-4 text-lg">
          My work speaks for the goals of my clients; it’s crafted carefully,
          studied through the gamut of human psychology, and created to stand
          the test of time. My role is to listen and trust, research and
          explore, create and design, present and deliver, and to cater to your
          needs.
        </p>
      </div>
    </div>
  );
};

export default Hire_Intro;
