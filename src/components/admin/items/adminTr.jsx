import React from "react";
import img from "../../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
const AdminTr = () => {
  return (
    <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-3 text-center font-medium text-gray-900">
        <div className=" flex items-center gap-3 justify-center">
          <img
            src={img}
            alt="img"
            className=" rounded-full w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
          ></img>
          <span> John Doe</span>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
        24/05/1995
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
        Web Developer
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-center text-gray-700">
        <button className=" text-red-700  border border-red-700 p-2 rounded-2xl">
          <div className=" flex items-center gap-2">
            <svg
              className="w-[24px] h-[24px] "
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
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>

            <span>Delete</span>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default AdminTr;
