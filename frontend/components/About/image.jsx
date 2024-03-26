import React from "react";
import img from "../Img/my_site_img.webp";
const Image = () => {
  return (
    <div className="bg-red-300 col-span-2">
      <img src={img} alt="image not found" />
    </div>
  );
};

export default Image;
