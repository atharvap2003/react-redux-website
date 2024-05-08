import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div>
      <footer
        className={
          isDarkMode
            ? "bg-darktheme text-zinc-200 first-line: text-center p-4 w-full"
            : "text-zinc-600 bg-zinc-100 dark:bg-zinc-200 dark:text-zinc-800 text-center p-4 w-full" 
        }
      >
        © 2024 Atharva Pandharikar
      </footer>
    </div>
  );
};

export default Footer;
