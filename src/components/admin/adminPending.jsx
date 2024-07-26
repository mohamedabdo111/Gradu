import React from "react";
import CardPending from "./items/cardPending";

const AdminPending = () => {
  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">Pending</h1>
        <div className="color-dash  bg-zinc-700"></div>
      </div>

      <div className=" w-[80%] sm:w-[65%] mx-auto my-6">
        <CardPending></CardPending>
        <CardPending></CardPending>
        <CardPending></CardPending>
        <CardPending></CardPending>
        <CardPending></CardPending>
      </div>
    </div>
  );
};

export default AdminPending;
