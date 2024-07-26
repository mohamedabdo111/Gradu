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
            path="/admin/dashboard"
            element={<AdminDashBoardPage></AdminDashBoardPage>}
          ></Route>
          <Route
            path="/admin/notification"
            element={<AdminNotificationPage></AdminNotificationPage>}
          ></Route>
          <Route
            path="/admin/flat"
            element={<OwnerFlatPage></OwnerFlatPage>}
          ></Route>
          <Route
            path="/admin/update-password"
            element={<OwnerPasswordPage></OwnerPasswordPage>}
          ></Route>
          <Route
            path="/admin/user"
            element={<OwnerUsersPage></OwnerUsersPage>}
          ></Route>
          <Route
            path="/admin/update-profile"
            element={<OwnerEditProfilePage></OwnerEditProfilePage>}
          ></Route>
          <Route
            path="/admin/all-flats"
            element={<OwnerAllFlatsPage></OwnerAllFlatsPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
