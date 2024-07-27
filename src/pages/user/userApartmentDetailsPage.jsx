import React from "react";
import UserImages from "../../components/user/userImages";
import UserInformation from "../../components/user/userInformation";
import UserComments from "../../components/user/userComments";
import GetApartmentDetailsHook from "../../hookPages/getApartmentDetailsHook";
import { useParams } from "react-router-dom";

const UserApartmentDetailsPage = () => {
  const { id } = useParams();
  const [loading, data] = GetApartmentDetailsHook(id);
  return (
    <div className=" container">
      {!loading ? (
        data && data != "" ? (
          <>
            <UserImages apartmentInfo={data}></UserImages>
            <UserInformation userInfo={data}></UserInformation>
            <UserComments></UserComments>
          </>
        ) : (
          <h1 className="for-not-found ">Details Not Founded</h1>
        )
      ) : (
        <h1 className="for-not-found ">Loadnig ... </h1>
      )}
    </div>
  );
};

export default UserApartmentDetailsPage;
