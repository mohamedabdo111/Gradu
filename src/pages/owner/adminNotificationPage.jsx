import React from "react";
import AdminNotification from "../../components/owner/adminNotification";
import Ownersidebar from "../../components/owner/adminSideBar";

const OwnerNotificationPage = () => {
  return (
    <div className=" grid grid-cols-12 mt-5">
      <div className="hidden md:block md:col-span-4 lg:col-span-3 m-3">
        <Ownersidebar></Ownersidebar>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9 m-3">
        <AdminNotification></AdminNotification>
      </div>
    </div>
  );
};

export default OwnerNotificationPage;