import React from "react";
import User from "../Home/User";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="mx-3 my-7 p-7  bg-gray-400">
      {/*  for larger screen  */}

      <div className=" md:block">
        <ul className="flex">
          <li className="mx-2">
            <NavLink
              to="/adminPanel/"
              className={({ isActive }) => (isActive ? "" : "link")}
            >
              User
            </NavLink>
          </li>

          <li className="mx-2">
            <NavLink
              to="arecommendations"
              className={({ isActive }) => (isActive ? "" : "link")}
            >
              recommendations
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/recommendations"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "link"
              }
            ></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
