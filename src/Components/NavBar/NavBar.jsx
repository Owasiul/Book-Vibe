import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <div className="lg:gap-10 gap-0 lg:space-y-0 space-y-4 flex lg:flex-row flex-col font-lg font-medium">
      <NavLink to="/">Home</NavLink>
      <NavLink>Listed Books</NavLink>
      <NavLink>Pages to Read</NavLink>
    </div>
  );
  return (
    <div className="navbar bg-white shadow-sm text-black px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-3xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <a className="btn">Sign in</a>
        <a className="btn">Sign up</a>
      </div>
    </div>
  );
};

export default NavBar;
