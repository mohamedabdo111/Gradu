import React from "react";
import img from "../../../images/photo_2024-03-21_21-37-11.jpg";
const CardsLanding = () => {
  return (
    <div className=" bg-white border shadow-md rounded-md">
      <div className="text-center">
        <img src={img} alt="imagecard" className="imgland p-2"></img>
        <h1 className="m-4 font-bold font-mono">شقه سوبر لوكس</h1>
        <h4 className="text-sec m-4">200 EGP</h4>

        <a className=" text-sec m-4 block border p-2 border-sec " href="/ap">
          Details
        </a>
      </div>
    </div>
  );
};

export default CardsLanding;
