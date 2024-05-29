import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//icons:
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  const ProductList = [
    {
      id: 1,
      name: "Mushroom Business Website",
      image: "/src/assets/MushroomProject.png",
      description:
        "Created using NextJS, Firebase, Framer Motion UI library, tailwindcss. A web applications to describe about mushroom selling business.",
      
    },
    {
      id: 2,
      name: "Personal Website",
      image: "/src/assets/PersonalSiteImage.png",
      description:
        "Built using React.js, Redux Toolkit, Tailwind CSS, with rapid styling and Framer Motion Library ",

    },
    {
      id: 3,
      name: "Movie Search Website",
      image: "../assets/Screenshot (24).png",
      description:
        "Created using nextjs, firebase, framerMotion, tailwindcss. A web applications to describe about mushroom selling business.",
    },
  ];
  const isDarkMode = useSelector((state)=> state.theme.isDarkModes);

  return (
    <div >
      <h1 className="m-4 ">Project List</h1>
      <main className="flex justify-center items-center flex-col cursor-pointer">
        {ProductList.map((i) => (
          <article
            className={ isDarkMode? "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[700px] ": "bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 m-2 max-w-[700px] "}
            key={i.id}
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
              <p className="hover:underline decoration-1 decoration-dotted">Click for More</p>
              <GoArrowUpRight className=" mt-1 text-xl hover:translate-x-2 transition-transform duration-300 " />
            </button>
            </Link>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Projects;
