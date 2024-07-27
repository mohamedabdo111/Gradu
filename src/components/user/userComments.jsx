import React from "react";
import img from "../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
const UserComments = () => {
  return (
    <div className=" bg-white p-4 rounded-lg">
      <h1 className=" text-xl font-semibold p-3">Comment</h1>
      <div className="border border-gray-400 shadow-lg p-3 rounded-lg my-4">
        <div className=" flex gap-3 items-center ">
          <img
            src={img}
            alt="imguser"
            className=" w-[50px] h-[50px] rounded-full"
          ></img>
          <h1 className=" font-semibold">Mohamed</h1>
        </div>

        <div className=" text-end my-4 fam">
          الشقه دي ميه ميه والراجل ده ميه ميه , الشقه دي ميه ميه والراجل ده ميه
          ميه ,الشقه دي ميه ميه والراجل ده ميه ميه ,الشقه دي ميه ميه والراجل ده
          ميه ميه
        </div>
      </div>
      <div className="border border-gray-400 shadow-lg p-3 rounded-lg my-4">
        <div className=" flex gap-3 items-center ">
          <img
            src={img}
            alt="imguser"
            className=" w-[50px] h-[50px] rounded-full"
          ></img>
          <h1 className=" font-semibold">Mohamed</h1>
        </div>

        <div className=" text-end my-4 fam">
          الشقه دي ميه ميه والراجل ده ميه ميه , الشقه دي ميه ميه والراجل ده ميه
          ميه ,الشقه دي ميه ميه والراجل ده ميه ميه ,الشقه دي ميه ميه والراجل ده
          ميه ميه
        </div>
      </div>
      <div className="border border-gray-400 shadow-lg p-3 rounded-lg my-4">
        <div className=" flex gap-3 items-center ">
          <img
            src={img}
            alt="imguser"
            className=" w-[50px] h-[50px] rounded-full"
          ></img>
          <h1 className=" font-semibold">Mohamed</h1>
        </div>

        <div className=" text-end my-4 fam">
          الشقه دي ميه ميه والراجل ده ميه ميه , الشقه دي ميه ميه والراجل ده ميه
          ميه ,الشقه دي ميه ميه والراجل ده ميه ميه ,الشقه دي ميه ميه والراجل ده
          ميه ميه
        </div>
      </div>
      <div className="border border-gray-400 shadow-lg p-3 rounded-lg my-4">
        <div className=" flex gap-3 items-center ">
          <img
            src={img}
            alt="imguser"
            className=" w-[50px] h-[50px] rounded-full"
          ></img>
          <h1 className=" font-semibold">Mohamed</h1>
        </div>

        <div className=" text-end my-4 fam">
          الشقه دي ميه ميه والراجل ده ميه ميه , الشقه دي ميه ميه والراجل ده ميه
          ميه ,الشقه دي ميه ميه والراجل ده ميه ميه ,الشقه دي ميه ميه والراجل ده
          ميه ميه
        </div>
      </div>
      <div className="border border-gray-400 shadow-lg p-3 rounded-lg my-4">
        <div className=" flex gap-3 items-center justify-center flex-wrap ">
          <img
            src={img}
            alt="imguser"
            className=" w-[50px] h-[50px] rounded-full"
          ></img>
          <input
            type="text"
            placeholder="type comment"
            className=" outline-none border border-gray-400 w-[100%] sm:w-[75%] p-3 rounded-lg"
          ></input>
          <button className="btn bg-sec w-[100%] sm:w-[15%]">Send</button>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
