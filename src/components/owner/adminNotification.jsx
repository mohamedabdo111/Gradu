import React from "react";
import img from "../../images/5df63bd5005f9c7615753f39306b2760.jpeg";
const AdminNotification = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">Notification</h1>
        <div className="color-dash  bg-notifi"></div>
      </div>

      <div className="w-[95%] md:w-[65%] mx-auto mt-8">
        <div className=" bg-red-600 text-white p-3 rounded-lg">
          <p className=" font-semibold ">We released some new features</p>
          <p className=" font-thin">Check them out!</p>
        </div>
      </div>
      <div className="w-[95%] md:w-[65%] mx-auto rounded-lg overflow-hidden ">
        <div className="flex items-center gap-3 bg-white p-3  border-b-2">
          <img
            src={img}
            alt="image-user"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          ></img>
          <div>
            <p>
              <span className=" font-semibold">Mohamed Zidan</span> react to
              your post
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-3  border-b-2">
          <img
            src={img}
            alt="image-user"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          ></img>
          <div>
            <p>
              <span className=" font-semibold">Mohamed Zidan</span> react to
              your post
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 border-b-2">
          <img
            src={img}
            alt="image-user"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          ></img>
          <div>
            <p>
              <span className=" font-semibold">Mohamed Zidan</span> react to
              your post
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-3  border-b-2">
          <img
            src={img}
            alt="image-user"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          ></img>
          <div>
            <p>
              <span className=" font-semibold">Mohamed Zidan</span> react to
              your post
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotification;
