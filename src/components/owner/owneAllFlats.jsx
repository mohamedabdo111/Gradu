import React from "react";
import FlatCardOwner from "./items/flatCardOwner";
const OwneAllFlats = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">All Flats</h1>
        <div className="color-dash  bg-notifi"></div>
      </div>

      <FlatCardOwner></FlatCardOwner>
      <FlatCardOwner></FlatCardOwner>
      <FlatCardOwner></FlatCardOwner>
    </div>
  );
};

export default OwneAllFlats;
