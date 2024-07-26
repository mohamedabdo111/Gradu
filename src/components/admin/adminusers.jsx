import React from "react";
import AdminTr from "./items/adminTr";
import AdminTable from "./adminTable";

const Adminusers = () => {
  return (
    <div>
      <div className=" grid grid-cols-12 gap-6 m-auto ">
        <div className="bg-white p-5 text-center col-span-4 h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1>Total Users</h1>
          <p className=" font-semibold mt-3">500</p>
        </div>
        <div className=" request p-5 text-center col-span-4 h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg    ">
          <h1> Students</h1>
          <p className=" font-semibold mt-3 users">500</p>
        </div>
        <div className=" p-5 text-center col-span-4 h-[155px] flex flex-col justify-center items-center rounded-xl shadow-lg bg-white ">
          <h1>Owners </h1>
          <p className=" font-semibold mt-3">500</p>
        </div>
      </div>

      <div className="my-9">
        <AdminTable></AdminTable>
      </div>
    </div>
  );
};

export default Adminusers;
