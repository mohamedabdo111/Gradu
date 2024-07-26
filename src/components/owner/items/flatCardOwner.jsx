import React from "react";
import img from "../../../images/Screenshot 2024-03-21 215400.jpg";
import { Link } from "react-router-dom";
const FlatCardOwner = () => {
  return (
    <div className=" my-5 w-[80%] sm:w-[60%] m-auto rounded-xl overflow-hidden  bg-white">
      <div className="imagecardflat relative">
        <img
          src={img}
          alt="image"
          className=" h-full bg-contain w-full rounded-xl  "
        />
        <svg
          class="w-6 h-6 text-red-700 hover:text-gray-400 top-2  cursor-pointer absolute right-3 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
            clip-rule="evenodd"
          />
        </svg>

        <Link
          to={"/owner/edit-flat"}
          className=" bg-white shadow-lg  p-3 w-[100px]  rounded-xl absolute bottom-2 right-3 flex justify-center gap-1 "
        >
          <svg
            class="w-6 h-6 text-links"
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
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
            />
          </svg>
          <span className=" text-links">Edit</span>
        </Link>
      </div>

      <div>
        <h1 className=" font-bold text-lg mt-6 text-center text-zinc-800 p-2">
          Apartment Title
        </h1>
        <p className="text-center text-zinc-800 p-2">
          Apartment Description this is a great apartment maximum 200 character
          for example..
        </p>

        <h2 className=" font-semibold  text-center text-zinc-800 p-2">
          New Damietta
        </h2>
        <h2 className=" font-semibold text-lg  text-center text-flat p-2">
          900 $
        </h2>
        <h2 className=" font-semibold  text-center text-zinc-800 p-3">
          4/2 Users
        </h2>
      </div>
    </div>
  );
};

export default FlatCardOwner;
