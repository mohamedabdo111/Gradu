import React from "react";
import UserSearchBar from "../../components/user/userSearchBar";
import UserCard from "../../components/user/userCard";
import GetAllApartmentHook from "../../hookPages/getAllApartmentHook";
import PaginationCode from "../../components/fixed/Pagination";

const UserAllFlatsPage = () => {
  const [loading, data, onpres] = GetAllApartmentHook();

  if (data && data.totalPages) {
    var pageCount = data.totalPages;
  }
  return (
    <div className="m-2">
      <UserSearchBar></UserSearchBar>

      <div className=" grid grid-cols-12 gap-4 container">
        {!loading ? (
          data && data.date ? (
            data.date.map((item, index) => {
              return <UserCard item={item} key={index}></UserCard>;
            })
          ) : (
            <h1 className="for-not-found">There Are No Apartments</h1>
          )
        ) : (
          <h1 className="for-not-found">Loading...</h1>
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
