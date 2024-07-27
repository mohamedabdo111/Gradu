import React from "react";
import UserImages from "../../components/user/userImages";
import UserInformation from "../../components/user/userInformation";
import UserComments from "../../components/user/userComments";

const UserApartmentDetailsPage = () => {
  return (
    <div className=" container">
      <UserImages></UserImages>
      <UserInformation></UserInformation>
      <UserComments></UserComments>
    </div>
  );
};

export default UserApartmentDetailsPage;
