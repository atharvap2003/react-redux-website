import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//framer-motion library:
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

//icons
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

//imags
import MushroomImage from "../assets/MushroomProject.png";
import PersonalWebsiteImage from "../assets/PersonalSiteImage.png";
import MovieSearchImage from "../assets/MovieSearchImage.png";
import logo from "../assets/img-2.png";

const cardVariant1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: "easeOut",
    },
  },
};

const cardVariant2 = {
  hidden : {opacity:0.1, y:-100},
  visible :{
    opacity : 1,
    y: 0,
    transition :{
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const home = () => {
  const ProductList = [
    {
      id: 1,
      name: "Mushroom Business Website",
      image: MushroomImage,
      description:
        "Created using NextJS, Firebase, Framer Motion UI library, tailwindcss. A web applications to describe about mushroom selling business.",
    },
    {
      id: 2,
      name: "Personal Website",
      image: PersonalWebsiteImage,
      description:
        "Built using React.js, Redux Toolkit, Tailwind CSS, with rapid styling and Framer Motion Library ",
    },
    {
      id: 3,
      name: "Movie Search Website",
      image: MovieSearchImage,
      description:
        "Created using Reactjs, firebase, framerMotion, tailwindcss. A web applications to describe about mushroom selling business.",
    },
  ];

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const controls = useAnimation();
  const {ref, inView} = useInView({
      triggerOnce : true,
      threshold : 0.1,
  });
  useEffect(()=>{
    if(inView){
      controls.start('visible');
    }
  }, [controls, inView])

  return (
    <div>
      <motion.div
        className={
          isDarkMode
            ? "bg-darktheme min-h-screen "
            : "bg-customRgb min-h-screen"
        }
        variants={cardVariant1}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-12 lg:px-4">
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="atharva"
              className="rounded-full shadow-md mb-4 lg:w-64 w-36  border-gray-500"
            />
            <h1 className="text-3xl font-bold mb-2">Atharva Pandharikar</h1>
            <p className="md:text-center lg:text-xl text-base mb-4 lg:px-32  text-justify">
              Hi 👋! I’m Atharva , I am a dedicated and skilled professional
              with experience in Information Technology, proficient in languages
              such as Java and JavaScript, and equipped with knowledge in MERN
              Stack, Redux toolkit, TailwindCSS, Firebase. My strength lies in
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
      </motion.div>

      <main
        className={`${
          isDarkMode ? "bg-darktheme" : "bg-customRgb"
        }  flex flex-col justify-center `}
      >
        {/* <h1 className="text-center  text-2xl font-bold">Projects</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          {ProductList.map((i) => (
            <motion.div
              className={
                isDarkMode
                  ? "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[400px] min-w-[200px]"
                  : "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[400px] min-w-[300px]"
              }
              key={i.id}
              variants={cardVariant2}
              initial="hidden"
              animate="visible"
              ref={ref}
            >
              <Link href="">
                <img
                  src={i.image}
                  alt="Project Image"
                  className=" max-h-[400px] rounded-lg md:object-cover object-contain "
                />
                <h2 className="text-2xl font-semibold mt-2">{i.name}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-md">
                  {i.description}
                </p>
                <button className="flex text-white rounded-lg mt-2 hover:underline decoration-1 my-1">
                  <p className="hover:underline decoration-1 decoration-dotted">
                    Click for More
                  </p>
                  <GoArrowUpRight className=" mt-1 text-xl hover:translate-x-2 transition-transform duration-300 " />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default home;
