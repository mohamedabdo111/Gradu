import React from "react";
import CardsLanding from "./cardslanding";

const ApartmentThree = () => {
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-9 mb-20 p-5">
        <h1 className="text-primary text-4xl font-bold">Best recommendation</h1>
        <div className=" flex justify-between my-5  ">
          <p className="para-about">
            Discover our exclusive selection of the finest one of a kind luxury
            properties architectural masterpieces.
          </p>
          <a
            className=" flex gap-3 w-52 cursor-pointer bg-white px-8 py-3 items-center h-fit text-sm sm:text-normal"
            href="/about-us"
          >
            <span className="font-thin read-about ">VIEW MORE</span>
            <span>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CardsLanding></CardsLanding>
          <CardsLanding></CardsLanding>
          <CardsLanding></CardsLanding>
        </div>
      </div>
    </div>
  );
};

export default ApartmentThree;
