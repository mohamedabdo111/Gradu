import React from "react";
import Adminsidebars from "../../components/admin/adminsidebar";
import OwnerEditProf from "../../components/owner/ownerEditProf";

const AdminEditProf = () => {
  return (
    <div className=" grid grid-cols-12 mt-5">
      <div className="hidden md:block md:col-span-4 lg:col-span-3 m-3">
        <Adminsidebars></Adminsidebars>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <OwnerEditProf></OwnerEditProf>
      </div>
    </div>
  );
};

export default AdminEditProf;
