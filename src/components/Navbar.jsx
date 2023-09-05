import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          {/* <img src="#" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
          <span className="self-center text-xl  whitespace-nowrap font-extrabold leading-none tracking-tight text-purple-600 hover:text-purple-700 md:text-5xl lg:text-3xl dark:text-white">
            Verselet
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link
            to="/signin"
            type="button"
            className=" bg-transparent border px-6 border-purple-500 text-purple-500 hover:bg-purple-800 hover:text-white focus:bg-purple-600 focus:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm  py-2.5 text-center mr-3 md:mr-0 dark:text-white dark:bg-transparent dark:hover:bg-purple-700 dark:focus:bg-purple-600 dark:focus:ring-purple-800"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            type="button"
            className="md:ml-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Sign up
          </Link>
          <Switcher />
          {/* <button
            data-collapse-toggle="navbar-cta"
            onClick={handleNavToggle}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
        {/* <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
