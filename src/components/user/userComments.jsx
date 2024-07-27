import React from "react";
import img from "../../images/user login.png";
// import PaginationCode from "../fixed/Pagination";
const UserComments = ({ comment, onpress }) => {
  return (
    <div className=" bg-white p-4 rounded-lg">
      <h1 className=" text-xl font-semibold p-3">Comment</h1>
      {comment && comment.date
        ? comment.date.map((item, index) => {
            return (
              <div
                className="border border-gray-400 shadow-lg p-3 rounded-lg my-4"
                key={index}
              >
                <div className=" flex gap-3 items-center ">
                  <img
                    src={
                      item.currentUserImage === null
                        ? img
                        : item.currentUserImage
                    }
                    alt="imguser"
                    className=" w-[50px] h-[50px] rounded-full"
                  ></img>
                  <h1 className=" font-semibold">{item.userCommentName}</h1>
                </div>

                <div className=" text-end my-4 fam">{item.commentValue}</div>
              </div>
            );
          })
        : null}

      {/* <PaginationCode pageCount={3} onpress={onpress}></PaginationCode> */}
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
