import React, { useEffect, useState } from "react";
import CardsLanding from "./cardslanding";
import { Link } from "react-router-dom";
import one, { useDispatch, useSelector } from "react-redux";
import { GetAllApartmentAction } from "../../../redux/actions/getAllApartmentAction";
import GetAllApartmentHook from "../../../hookPages/getAllApartmentHook";
const ApartmentThree = () => {
  const [loading, data] = GetAllApartmentHook();
  let threeApart = "";
  if (data.date) {
    threeApart = data.date.slice(0, 3);
  }

  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-9 mb-20 p-5">
        <h1 className="text-primary text-4xl font-bold">Best recommendation</h1>
        <div className=" flex justify-between my-5 flex-nowrap ">
          <p className="w-full sm:para-about">
            Discover our exclusive selection of the finest one of a kind luxury
            properties architectural masterpieces.
          </p>
          <Link
            className=" flex gap-3 w-44 sm:w-52 cursor-pointer bg-white px-8 py-3 items-center h-fit text-sm sm:text-normal"
            to={"/user/view-flats"}
          >
            <span className="font-thin read-about ">VIEW MORE</span>
            <span>
              <svg
                className="w-[24px] h-[24px] text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {threeApart && threeApart != "" ? (
            threeApart.map((item, index) => {
              return <CardsLanding item={item} key={index}></CardsLanding>;
            })
          ) : (
            <h1 className=" font-bold text-2xl  md:text-4xl text-center col-span-6 max-w-[1100px]">
              There Are No Apartments
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentThree;
