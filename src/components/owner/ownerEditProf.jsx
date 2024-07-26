import React from "react";
import img from "../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
const OwnerEditProf = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">Edit Profile</h1>
        <div className="color-dash  bg-editprof"></div>
      </div>

      <div className=" w-[100%] md:w-[90%] mt-9 grid grid-cols-12 m-auto">
        <div className=" col-span-6">
          <div className="mt-6">
            <label className="font-semibold block">UserName</label>
            <input
              id="Username"
              type="text"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
            />
          </div>
          <div className="mt-6">
            <label className="font-semibold block">Email</label>
            <input
              id="mail"
              type="email"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
            />
          </div>
          <div className="mt-6">
            <label className="font-semibold block">Phone Number</label>
            <input
              id="phone"
              type="phone"
              className="p-2  bg-transparent rounded-lg w-full border border-black"
            />
          </div>
        </div>
        {/* imageprof */}
        <div className=" col-span-6 text-center mt-6">
          <img
            src={img}
            alt="img"
            className="imgreg rounded-full outline outline-white outline-4 m-auto"
          ></img>
          <button className=" p-3 bg-dash text-black rounded-2xl mt-5">
            Change Profile Pic
          </button>
          {/* make input file foucse in image not button */}
        </div>
      </div>
    </div>
  );
};

export default OwnerEditProf;
