import React from "react";
import FlatCardOwner from "../../pages/owner/flatCardOwner";

const OwneAllFlats = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">Add Flat</h1>
        <div className="color-dash  bg-notifi"></div>
      </div>

      <FlatCardOwner></FlatCardOwner>
    </div>
  );
};

export default OwneAllFlats;
