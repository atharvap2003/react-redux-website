import React from "react";

import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "../assets/img-2.png";
import { useSelector } from "react-redux";

const home = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className={
        isDarkMode ? "bg-darktheme h-screen" : "bg-customRgb : h-screen"
      }
    >
      <div className="container mx-auto px-4 py-12 lg:px-48">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="atharva"
            className="rounded-full shadow-md mb-4 lg:w-64 w-36  border-gray-500"
          />
          <h1 className="text-3xl font-bold mb-2">Atharva Pandharikar</h1>
          <p className="text-center lg:text-xl text-base mb-4 lg:px-32">
            Hi 👋! I’m Atharva , I am a dedicated and skilled professional with
            experience in Information Technology, proficient in languages such
            as Java and JavaScript, and equipped with knowledge in MERN Stack,
            Redux toolkit, TailwindCSS, Firebase. My strength lies in
            dedication, staying updated, expanding skills, and applying
            expertise to deliver exceptional results in the IT industry
            andcontribute to project success.
          </p>
          <div className="flex space-x-4 items-center justify-center mt-1">
            <a
              href="/error"
              target="_"
              className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <MdOutlineMailOutline
                className={
                  isDarkMode
                    ? "text-3xl text-zinc-200 hover:text-gray-400"
                    : "text-3xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
                }
              />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvapandharikar/"
              target="_"
              className=" text-2xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
            >
              <FiLinkedin
                className={
                  isDarkMode
                    ? "text-3xl text-zinc-200 hover:text-gray-400"
                    : "text-3xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
                }
              />
            </a>
            <a
              href="https://github.com/atharvap2003"
              target="_"
              className=" text-2xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
            >
              <LuGithub
                className={
                  isDarkMode
                    ? "text-3xl text-zinc-200 hover:text-gray-400"
                    : "text-3xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
                }
              />
            </a>
            <a
              href="https://www.instagram.com/atharva_pandharikar/"
              target="_"
              className=" text-2xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
            >
              <FaInstagram
                className={
                  isDarkMode
                    ? "text-3xl text-zinc-200 hover:text-gray-400"
                    : "text-3xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
                }
              />
            </a>
            <a
              href="https://google.com"
              className=" text-2xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
            >
              <IoDocumentTextOutline
                className={
                  isDarkMode
                    ? "text-3xl text-zinc-200 hover:text-gray-400"
                    : "text-3xl text-black hover:text-gray-400 hover:cursor-pointer font-bold"
                }
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
