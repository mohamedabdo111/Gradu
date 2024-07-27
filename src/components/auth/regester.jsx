import React from "react";
import img from "../../images/image.png";
import logo from "../../images/Group11.png";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className=" grid grid-cols-12 gap-4 bg-login">
      <div className=" hidden md:block md:col-span-5  lg:col-span-6 m-auto">
        <img src={img} alt="vector" className=" w-[450px]" />
      </div>
      <div className=" col-span-12 sm:col-span-8 md:col-span-7 lg:col-span-5  border m-8 p-2 text-center bg-white rounded-md min-h-[640px]  ">
        <h1 className="  text-4xl my-7 font-thin read-about">
          Create an account
        </h1>
        <img src={logo} alt="logo" className=" m-auto"></img>

        <div className=" w-full my-7">
          <input
            type="text"
            placeholder="User Name"
            className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
          ></input>
          <div className=" w-full my-7">
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
            ></input>
          </div>
          <div className=" w-full my-7">
            <input
              type="number"
              placeholder="Phone number"
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
          <div className=" w-full my-7">
            <input
              type="password"
              placeholder="Confirm password"
              className="border-b-2 p-2 w-[80%] focus:outline-none focus:border-black"
            ></input>
          </div>

          <div className=" flex justify-center  gap-12 my-6">
            <div className=" flex flex-row-reverse items-center gap-2">
              <input
                type="radio"
                for="male"
                id="male"
                name="gender"
                value="gender"
              ></input>
              <img
                src={male}
                alt="male"
                className="imgreg"
                id="male"
                name="one"
                for="male"
              ></img>
            </div>
            <div className=" flex flex-row-reverse items-center gap-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="gender"
              ></input>
              <img src={female} alt="female"></img>
            </div>
          </div>

          <div className="my-6">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5 w-[80%] p-2 border rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="">User Type</option>
              <option value="owner">Owner</option>
              <option value="user"> User</option>
            </select>
          </div>

          <button className="bg-links w-[80%] p-2 rounded-md text-white my-7">
            Register
          </button>
          <p className=" font-medium my-7">
            Already have an account?{" "}
            <Link to="/login" className="text-links">
              Login ...{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
