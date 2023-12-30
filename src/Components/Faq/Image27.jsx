// import React from "react";
// import { left } from "@popperjs/core";
import image from "./Image27.png";

const Image = () => {
  return (
    <div className="relative" >
      
      <img  className="absolute top-0 right-0  h-auto"
        style={{ width: '621px', height: '600px' }}
        src={image}
      />
    </div>
  );
};

export default Image;
