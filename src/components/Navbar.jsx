import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/reducers/themeReducer";

import { LuMoon } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  return (
    <div>
      <nav className="p-5">
        <div className="container mx-auto flex justify-between items-center lg:px-48 ">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold"><a href="/">Atharva</a></h1>
            <span
              className="lg:text-xl text-xl px-2 mt-1 lg:mt-2 cursor-pointer"
              onClick={toggleTheme}
            >
              {isDarkMode ? <IoSunnyOutline /> : <LuMoon />}
            </span>
          </div>
          <div className="sm:space-x-5 space-x-3 sm:text-lg xs flex focus:outline-double  font-semibold text-black-600">
            <p>
              <a
                href="/"
                className={
                  isDarkMode
                    ? "text-zinc-200  dark:hover:text-grey hover:cursor-pointer "
                    : " text-zinc-900"
                }
              >
                Home
              </a>
            </p>

            <p>
              <a
                href="/project"
                className={
                  isDarkMode
                    ? "text-zinc-200  dark:hover:text-grey"
                    : " text-zinc-900"
                }
              >
                Projects
              </a>
            </p>

            <a
              href="/conatct"
              className={
                isDarkMode
                  ? "text-zinc-200  dark:hover:text-grey"
                  : " text-zinc-900"
              }
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
