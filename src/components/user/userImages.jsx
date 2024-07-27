import React from "react";
import img from "../../images/Screenshot 2024-03-21 215400.jpg";
const UserImages = () => {
  return (
    <div className="grid grid-cols-12 h-[437px] gap-3 my-6">
      <div className=" col-span-12 md:col-span-6">
        <img
          src={img}
          alt="imagecover"
          className=" h-full object-cover rounded-md "
        />
      </div>
      <div className=" col-span-12 md:col-span-6 flex imageDetails justify-between cursor-pointer">
        <img
          src={img}
          alt="imagecover"
          className=" h-full object-cover rounded-md cursor-pointer "
        />
        <img
          src={img}
          alt="imagecover"
          className=" h-full object-cover rounded-md cursor-pointer "
        />
        <img
          src={img}
          alt="imagecover"
          className=" h-full object-cover rounded-md "
        />
      </div>
    </div>
  );
};

export default UserImages;
