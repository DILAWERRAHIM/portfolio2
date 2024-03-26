import React from "react";
import { NavLink } from "react-router-dom";
import { X_mark, Container } from "../Icons/icons";
import { useState } from "react";

const Navbar = () => {
  const [toggle, set_toggle] = useState(false);

  return (
    <div className="mx-3 my-auto text-white ">
      {/*  for larger screen  */}

      <div className=" hidden md:block">
        <ul className="flex">
          <li className="mx-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "link"
              }
            >
              About Me
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "link"
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "link"
              }
            >
              Projects
            </NavLink>
          </li>

          <li className="mx-2">
            <NavLink
              to="/recommendations"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : "link"
              }
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
      <div className="block  md:hidden">
        {toggle ? (
          <li className="m-2 list-none" onClick={() => set_toggle(!toggle)}>
            <X_mark />{" "}
          </li>
        ) : (
          <li className="m-2 list-none" onClick={() => set_toggle(!toggle)}>
            {" "}
            <Container />
          </li>
        )}
        {/* for smaller screen */}

        <div className="block md:hidden">
          <ul
            className={`absolute ${toggle ? "left-[0%] " : "left-[-110%]"}
         top-[100%] transition-all duration-500 bg-black w-[100%]`}
          >
            <li className="m-2 my-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              ></NavLink>
            </li>
            <li className="m-2 my-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                About Me
              </NavLink>
            </li>
            <li className="m-2 my-6">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="m-2 my-6">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="m-2 my-6">
              <NavLink
                to="/recommendations"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                recommendations
              </NavLink>
            </li>
            <li className="m-2 my-6">
              <NavLink
                to="/add-recommendations"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                Add recommendations
              </NavLink>
            </li>
            <li className="m-2 my-6">
              <NavLink
                to="/hire-me"
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-white" : "link"
                }
              >
                Hire me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
