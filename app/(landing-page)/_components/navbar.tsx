import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="font-semibold text-gray-400">
          FOMOFY
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          href="/sign-in"
          className="btn btn-sm px-4 flex items-center btn-outline"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
