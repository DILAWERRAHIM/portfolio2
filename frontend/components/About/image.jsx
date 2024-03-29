import React from "react";
import img from "../Img/my_site_img.webp";
const Image = () => {
  return (
    <div className="col-span-1 md:col-span-1">
      <img src={img} alt="image not found" />
    </div>
  );
};

export default Image;
