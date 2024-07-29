import React, { useEffect } from "react";
import FlatCardOwner from "./items/flatCardOwner";
import { useDispatch, useSelector } from "react-redux";
import { GetApartmentAction } from "../../redux/actions/ownerAction";
import PaginationCode from "../fixed/Pagination";
import OwenrAllFlatsHook from "../../hookPages/owenrAllFlats";
import NotFound from "../fixed/notFound";
import Loading from "../fixed/Loading";
const OwneAllFlats = () => {
  if (JSON.parse(localStorage.getItem("UserInf")) != null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    userId = "";
  }
  const [loading, data, totalPages, onpress] = OwenrAllFlatsHook(userId);

  return (
    <div>
      <div>
        <h1 className="head-dash text-xl">All Flats</h1>
        <div className="color-dash  bg-notifi"></div>
      </div>

      {!loading ? (
        data ? (
          data.map((item, index) => {
            return <FlatCardOwner item={item} key={index}></FlatCardOwner>;
          })
        ) : (
          <NotFound item={"Apartments"}></NotFound>
        )
      ) : (
        <Loading></Loading>
      )}
      {totalPages <= 1 ? null : (
        <PaginationCode
          pageCount={totalPages}
          onpress={onpress}
        ></PaginationCode>
      )}
    </div>
  );
};

export default OwneAllFlats;
