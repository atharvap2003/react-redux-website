import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//framer-motion library:
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

//icons & images:
import { GoArrowUpRight } from "react-icons/go";
import MushroomImage from "../assets/MushroomProject.png";
import PersonalWebsiteImage from "../assets/PersonalSiteImage.png";
import MovieSearchImage from "../assets/MovieSearchImage.png";
import WeatherForecast from "../assets/WeatherForcast.png";
import PropertySite from "../assets/PropertySite.png";

const cardVariant1 = {
  hidden: { opacity: 0, y: 0 },
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
  hidden: { opacity: 0.1, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  const ProductList = [
    {
      id: 1,
      name: "MERN Property Listing",
      image: PropertySite,
      description:
        "Created using MERN Stack Technologies(ReactJS, NodeJS, ExpressJS, MongoDB). With feature of Authentication, User Management, Listing.",
    },
    {
      id: 2,
      name: "Mushroom Business Website",
      image: MushroomImage,
      description:
        "Created using NextJS, Firebase, Framer Motion UI library, tailwindcss. A web applications to describe about mushroom selling business.",
    },
    {
      id: 3,
      name: "Personal Website",
      image: PersonalWebsiteImage,
      description:
        "Built using React.js, Redux Toolkit, Tailwind CSS, with rapid styling and Framer Motion Library ",
    },
    {
      id: 4,
      name: "Movie Search Website",
      image: MovieSearchImage,
      description:
        "Created using Reactjs, firebase, framerMotion, tailwindcss. A web applications to describe about mushroom selling business.",
    },
    {
      id: 5,
      name: "Weather Forcast",
      image: WeatherForecast,
      description:
        "Created using Reactjs, Coingecko API, tailwindcss. A web applications to gives weather Information.",
    },
  ];

  const isDarkMode = useSelector((state) => state.theme.isDarkModes);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div variants={cardVariant1} initial="hidden" animate="visible">
      <h1 className="text-center text-2xl">Project List</h1>
      <main className="flex justify-center items-center flex-col cursor-pointer">
        {ProductList.map((i) => (
          <article
            className={
              isDarkMode
                ? "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[700px] "
                : "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[650px] "
            }
            key={i.id}
          >
            <Link href={i.link}>
              <img
                src={i.image}
                alt="Project Image"
                className=" max-h-[400px] rounded-lg md:object-cover object-contain "
              />
              <h2 className="text-2xl font-semibold mt-2">{i.name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-md">
                {i.description}
              </p>
            </Link>
          </article>
        ))}
      </main>
    </motion.div>
  );
};

export default Projects;
