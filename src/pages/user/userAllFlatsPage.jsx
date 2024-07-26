import React from "react";
import UserSearchBar from "../../components/user/userSearchBar";
import UserCard from "../../components/user/userCard";

const UserAllFlatsPage = () => {
  return (
    <div className="m-2">
      <UserSearchBar></UserSearchBar>

      <div className=" grid grid-cols-12 gap-4 container">
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
        <UserCard></UserCard>
      </div>
    </div>
  );
};

export default UserAllFlatsPage;
