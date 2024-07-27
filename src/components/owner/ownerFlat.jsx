import React from "react";
import { Link } from "react-router-dom";

const OwnerFlat = () => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div>
          <h1 className="head-dash text-xl">Add Flat</h1>
          <div className="color-dash  bg-flat"></div>
        </div>
        <div className="flex gap-8">
          <button className="p-3 text-white bg-dash rounded-xl  w-[80px] sm:w-[150px]">
            Save
          </button>
          <Link
            to={"/owner/all-flats"}
            className="p-3 text-white bg-flat rounded-full w-[150px] flex gap-3 justify-center items-center"
          >
            <span>
              <svg
                className="w-[24px] h-[24px] text-gray-800"
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
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
            </span>
            Flats
          </Link>
        </div>
      </div>

      <div className="inputflat w-[100%] md:w-[50%] mt-9">
        <div>
          <label className="font-semibold block">Title</label>
          <input
            type="text"
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>

        <div className="mt-6">image</div>

        <div className=" flex justify-between mt-6">
          <div>
            <label className=" font-semibold mx-5">City</label>
            <select className="p-2 bg-transparent rounded-lg border border-black min-w-[150px]">
              <option value="0">select</option>
              <option value="0">one</option>
              <option value="0">two</option>
              <option value="0">three</option>
              <option value="0">select</option>
            </select>
          </div>
          <div>
            <label className=" font-semibold mx-5">Gender</label>
            <select className="p-2 bg-transparent rounded-lg border border-black min-w-[150px]">
              <option value="0">select</option>
              <option value="0">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="font-semibold block">Address</label>
          <input
            type="text"
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold block">
            Information about the Apartment{" "}
          </label>
          <textarea
            id="Username"
            className="p-2  bg-transparent rounded-lg w-full border border-black"
          />
        </div>

        <div className="mt-6">
          <h1 className=" font-semibold">
            Ownership Contract Document Authentication{" "}
          </h1>
          <div>image</div>
        </div>

        <div className=" flex justify-between mt-6">
          <div>
            <label className=" font-semibold mx-5">Residents</label>
            <select className="p-2 bg-transparent rounded-lg border border-black min-w-[50px]">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>
          <div>
            <label className=" font-semibold mx-5">Rooms</label>
            <select className="p-2 bg-transparent rounded-lg border border-black min-w-[50px]">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <h1 className=" font-semibold">Upload Video</h1>
          <div>vedio</div>
        </div>
      </div>
    </div>
  );
};

export default OwnerFlat;
