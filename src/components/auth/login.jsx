import React from "react";
import img from "../../images/VECTOR.jpg";
import logo from "../../images/Group11.png";
const Login = () => {
  return (
    <div className=" grid grid-cols-12 gap-4 bg-login">
      <div className=" col-span-12 sm:col-span-8 md:col-span-7 lg:col-span-5  border m-8 p-2 text-center bg-white rounded-md h-[640px]  ">
        <h1 className="  text-4xl  my-7 font-thin read-about ">LOGIN</h1>
        <img src={logo} alt="logo" className=" m-auto"></img>

        <div className=" w-full my-7">
          <input
            type="email"
            placeholder="Email Address"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
          ></input>
        </div>
        <div className=" w-full my-7">
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
          ></input>
        </div>
        <div>
          <a href="/forget-password" className="links font-semibold my-6">
            Forget Password
          </a>
        </div>
        <button className="bg-links w-[80%] p-2 rounded-md text-white my-7">
          Login
        </button>
        <p className=" font-medium my-7">
          Don't have an account?{" "}
          <a href="/register" className="text-links">
            Regester ...{" "}
          </a>
        </p>
      </div>
      <div className=" hidden md:block md:col-span-5  lg:col-span-6 m-auto">
        <img src={img} alt="vector" />
      </div>
    </div>
  );
};

export default Login;
