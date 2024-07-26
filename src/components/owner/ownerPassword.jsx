import React from "react";

const OwnerPassword = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">Change Password</h1>
        <div className="color-dash  bg-pass"></div>
      </div>

      <div className=" w-[100%] md:w-[50%] mt-9">
        <div>
          <label className="font-semibold block">Old Password</label>
          <input
            id="Username"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold block">New Password</label>
          <input
            id="Username"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>
        <div className="mt-6">
          <label className="font-semibold block">Confirm New Password</label>
          <input
            id="Username"
            type="password"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>

        <div className=" text-center">
          <button className="bg-pass w-[100px] p-3 rounded-md mt-6 text-white ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerPassword;
