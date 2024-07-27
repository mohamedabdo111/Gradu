import React, { useState } from "react";
import Logo from "../../images/Group11.png";
const Header = () => {
  const [ispress, setIsPress] = useState(false);

  const activate = () => {
    setIsPress(!ispress);
    console.log(ispress);
  };

  const notActive = () => {
    setIsPress(false);
  };
  return (
    <header className="bg-white shadow-md  ">
      <div className="container ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src={Logo} alt="Logo"></img>
            </a>
          </div>

          <div className={`md:block ${ispress ? "listNav" : "notAct"} `}>
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm ">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Main
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact US
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/owner/dashboard"
                  >
                    Owner dash
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/admin/dashboard"
                  >
                    Admin dash
                  </a>
                </li>

                <div
                  className="w-fit h-fit absolute right-0 p-2"
                  onClick={notActive}
                >
                  <svg
                    className="w-[24px] h-[24px] text-gray-800 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </div>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-sec px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sec"
                  href="/register"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={activate}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
