import React from "react";
import UserSearchBar from "../../components/user/userSearchBar";
import UserCard from "../../components/user/userCard";
import GetAllApartmentHook from "../../hookPages/getAllApartmentHook";
import PaginationCode from "../../components/fixed/Pagination";
import Loading from "../../components/fixed/Loading";

const UserAllFlatsPage = () => {
  const [loading, , onpres, , , items] = GetAllApartmentHook();

  if (items && items.data && items.data.totalPages) {
    var pageCount = items.data.totalPages;
  }

  return (
    <div className="m-2">
      <UserSearchBar></UserSearchBar>

      <div className=" grid grid-cols-12 gap-4 container">
        {!loading ? (
          items &&
          items.data &&
          items.data.date &&
          items.data.date.length > 0 ? (
            items.data.date.map((item, index) => {
              return <UserCard item={item} key={index}></UserCard>;
            })
          ) : (
            <h1 className="for-not-found">There Are No Apartments</h1>
          )
        ) : (
          <h1 className="for-not-found">
            <Loading></Loading>
          </h1>
        )}
      </div>
      {pageCount && pageCount > 1 ? (
        <div>
          <PaginationCode
            pageCount={pageCount}
            onpress={onpres}
          ></PaginationCode>
        </div>
      ) : null}
    </div>
  );
};

export default UserAllFlatsPage;
