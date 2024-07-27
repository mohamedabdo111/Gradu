import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/fixed/header";
import LangingPage from "./components/landingPage/langingpage";
import Footer from "./components/fixed/footer";
import Login from "./components/auth/login";
import Register from "./components/auth/regester";
import AdminDashBoardPage from "./pages/owner/adminDashBoardPage";
import AdminNotificationPage from "./pages/owner/adminNotificationPage";
import OwnerFlatPage from "./pages/owner/ownerFlatPage";
import OwnerPasswordPage from "./pages/owner/ownerPasswordPage";
import OwnerUsersPage from "./pages/owner/ownerUsersPage";
import OwnerEditProfilePage from "./pages/owner/ownerEditProfilePage";
import OwnerAllFlatsPage from "./pages/owner/ownerAllFlatsPage";
import OwnerDashBoardPage from "./pages/owner/adminDashBoardPage";
import OwnerNotificationPage from "./pages/owner/adminNotificationPage";
import AdminDashBoardPagead from "./pages/admin/admindashPage";
import AdminNotifiPage from "./pages/admin/adminNotifPage";
import AdminPasswordPage from "./pages/admin/adminEditPasswordPage";
import AdminUsersPage from "./pages/admin/adminUsersPage";
import AdminEditProf from "./pages/admin/adminEditProfPage";
import AdminPenddingPage from "./pages/admin/adminPenddingpage";
import UserAllFlatsPage from "./pages/user/userAllFlatsPage";
import UserApartmentDetails from "./pages/user/userApartmentDetailsPage";
import UserApartmentDetailsPage from "./pages/user/userApartmentDetailsPage";
import ForgetPassword from "./components/auth/forgetPassword";
import EmailForget from "./components/auth/emailuser";
import CodeNumber from "./components/auth/codeNumber";

const App = () => {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LangingPage></LangingPage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/forget-password"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route
            path="/email-address"
            element={<EmailForget></EmailForget>}
          ></Route>
          <Route
            path="/code-confirm"
            element={<CodeNumber></CodeNumber>}
          ></Route>
          <Route
            path="/owner/dashboard"
            element={<OwnerDashBoardPage></OwnerDashBoardPage>}
          ></Route>
          <Route
            path="/owner/notification"
            element={<OwnerNotificationPage></OwnerNotificationPage>}
          ></Route>
          <Route
            path="/owner/flat"
            element={<OwnerFlatPage></OwnerFlatPage>}
          ></Route>
          <Route
            path="/owner/update-password"
            element={<OwnerPasswordPage></OwnerPasswordPage>}
          ></Route>
          <Route
            path="/owner/user"
            element={<OwnerUsersPage></OwnerUsersPage>}
          ></Route>
          <Route
            path="/owner/update-profile"
            element={<OwnerEditProfilePage></OwnerEditProfilePage>}
          ></Route>
          <Route
            path="/owner/all-flats"
            element={<OwnerAllFlatsPage></OwnerAllFlatsPage>}
          ></Route>

          {/* admin */}
          <Route
            path="/admin/dashboard"
            element={<AdminDashBoardPagead></AdminDashBoardPagead>}
          ></Route>
          <Route
            path="/admin/notification"
            element={<AdminNotifiPage></AdminNotifiPage>}
          ></Route>
          <Route
            path="/admin/update-password"
            element={<AdminPasswordPage></AdminPasswordPage>}
          ></Route>
          <Route
            path="/admin/users"
            element={<AdminUsersPage></AdminUsersPage>}
          ></Route>
          <Route
            path="/admin/update-profile"
            element={<AdminEditProf></AdminEditProf>}
          ></Route>
          <Route
            path="/admin/pending"
            element={<AdminPenddingPage></AdminPenddingPage>}
          ></Route>

          {/* users */}
          <Route
            path="/user/view-flats"
            element={<UserAllFlatsPage></UserAllFlatsPage>}
          ></Route>
          <Route
            path="/user/apartment-details/:id"
            element={<UserApartmentDetailsPage></UserApartmentDetailsPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
