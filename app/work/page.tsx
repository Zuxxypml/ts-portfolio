"use client";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

type projectsType = {
  num: number;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};
const projects: projectsType[] = [
  {
    num: 1,
    category: "E-commerce",
    title: "Zuxxy Mart",
    description:
      "This project was made when I started out. It was my first e-commerce project with the basic Functionality you will see on an e-commerce website.",
    stack: [
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "Express" },
      { name: "Node" },
    ],
    image: "/assets/work/1.jpg",
    live: "",
    github: "",
  },
  {
    num: 2,
    category: "Game",
    title: "Simon Game",
    description:
      "Another of my Starting out Application. The Popular Simon Game Replica Made with Javascript and Jquery",
    stack: [{ name: "JavaScript" }, { name: "Jquery" }, { name: "Netlify" }],
    image: "/assets/work/2.jpg",
    live: "",
    github: "",
  },
  {
    num: 3,
    category: "Weather",
    title: "Weather Application",
    description:
      "A Weather Application that uses Open Weather Map API. Check the Weather of your Country :) ",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Ajax" },
      { name: "Javascript" },
      { name: "API(Open Weather Map)" },
    ],
    image: "/assets/work/6.jpg",
    live: "",
    github: "",
  },
  {
    num: 4,
    category: "Fitness",
    title: "Workout Buddy",
    description:
      "A Workout Tracking Web Application. Track your daily workout reps lol :) ",
    stack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "JWT" },
      { name: "bcryptjs" },
    ],
    image: "/assets/work/3.png",
    live: "",
    github: "",
  },
  {
    num: 5,
    category: "Storage",
    title: "Codehub",
    description:
      "A storage web app to save your project files, api keys, and other secret credentials:) ",
    stack: [
      { name: "JavaScript" },
      { name: "EJS" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Passport.js" },
      { name: "bcryptjs" },
    ],
    image: "/assets/work/4.jpg",
    live: "",
    github: "",
  },
  {
    num: 6,
    category: "Crypto",
    title: "Deem Exchange",
    description:
      "A crypto Exchange Web Application. Realtime crypto value, good rates, fast payment. (Still in Development but not Maintained. Feel free to drop a pull req) :) ",
    stack: [
      { name: "JavaScript" },
      { name: "EJS" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Passport.js" },
      { name: "bcryptjs" },
    ],
    image: "/assets/work/5.png",
    live: "",
    github: "",
  },
  {
    num: 7,
    category: "E-commerce",
    title: "Kaizen Brand",
    description:
      "Kaizen Clothing Brand. Get Kaizen Collections, Merchs and Clothings from Kaizen Web Application. :) ",
    stack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Styled Components" },
      { name: "MUI" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Paystack" },
      { name: "Nodemailer" },
      { name: "Image DB" },
    ],
    image: "/assets/work/6.png",
    live: "",
    github: "",
  },
];

export default function Work() {
  const [projectsData, setProjectsData]: [
    projectsType,
    React.Dispatch<React.SetStateAction<projectsType>>
  ] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project data based on current slide index
    setProjectsData(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.18, delay: 0.12, ease: "easeIn" },
      }}
      className="min-h-[80px] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap[30px] ">
          <div className="w-full xl:[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col  gap-[30px] h-[50%]  ">
              {/* Outline number  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projectsData.num}
              </div>
              {/* Project category  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {projectsData.category} project
              </h2>
              {/* Project description  */}
              <p className="text-gray-300">{projectsData.description}</p>
              {/* Stack  */}
              <ul className="flex flex-wrap gap-4">
                {projectsData.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-accent text-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {item.name}
                    {index < projectsData.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border  */}
              <div className="border border-white/20"></div>
              {/* Buttons  */}
              <div className="flex items-center gap-4">
                {/* Live project button  */}
                <Link
                  href={projectsData.live}
                  target="_blank"
                  aria-label="Live Demo"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button  */}
                <Link
                  href={projectsData.github}
                  target="_blank"
                  aria-label="Github Source"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Source</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Project image  */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover g"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider buttons  */}
              <WorkSliderButtons
                containerStyles=" flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max x;:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary  text-[22px] w-[44px] h-[44px] flex justify-center items-center tansition-all"
                iconsStyles="text-2xl text-black"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
