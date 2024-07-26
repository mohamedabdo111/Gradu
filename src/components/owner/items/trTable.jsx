import React from "react";
import img from "../../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
const TrTable = () => {
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
        <button className=" bg-flat text-white p-2 rounded-2xl mx-2">
          Accept
        </button>
        <button className=" bg-red-700   text-white p-2 rounded-2xl">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TrTable;
