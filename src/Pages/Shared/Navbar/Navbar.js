import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {

    const menulist = (
      <>
        <li>
          <Link className='text text-xl' to="/">Home</Link>
        </li>
        <li>
          <Link className='text text-xl' to="/sector">Sector</Link>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-[#e0f6f8]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menulist}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl text">TASK</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menulist}</ul>
          </div>
          <div className="search-container navbar-end">
            <input type="text" placeholder="Search.." name="search" />
            <button>
              <FaSearch className="search-icon"></FaSearch>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;