import React from "react";
import img from "../../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
import img2 from "../../../images/Screenshot 2024-03-21 215400.jpg";
const CardPending = () => {
  return (
    <div className=" bg-white my-9 rounded-2xl">
      <div className="p-3 flex gap-3 items-center border-b-2 ">
        <img
          src={img}
          alt="image"
          width={70}
          height={70}
          className=" w-[65px] h-[65px] sm:w-[70px] sm:h-[70px] rounded-full "
        ></img>
        <div>
          <p className=" text-gray-600">Mohamed Zidan</p>
          <p className=" text-gray-600">1 week</p>
        </div>
      </div>
      <div className="p-3 ">
        <p className=" text-gray-600 my-3 text-center">
          New post uploaded by Ramez Mousa under the title of Super deluxe
          apartment
        </p>

        <div className=" border rounded-lg overflow-hidden">
          <img
            src={img2}
            alt="imagecover"
            className=" rounded-lg w-full h-[225px]"
          ></img>
          <div className="p-4">
            <p className=" font-semibold text">
              Located in 70th street New Damietta
            </p>
            <p className="  text-gray-600">6 residents </p>
            <p className="  text-gray-600">6500 EGP</p>
          </div>
        </div>

        <div className="text-center my-4">
          <button className="bg-green-600 text-white p-2 rounded-lg mx-2">
            Accept
          </button>
          <button className="bg-red-600 text-white p-2 rounded-lg mx-2">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPending;
