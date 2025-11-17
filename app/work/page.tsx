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
import { Swiper, SwiperSlide } from "swiper/react";

type projectsType = {
  num: number;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
};
const projects: projectsType[] = [
  {
    num: 1,
    category: "Registration",
    title: "AHAPN Conference Portal",
    description:
      "Event management and registration system for AHAPN. Deployed on VPS with Nginx and PM2, automated attendee registration, digital IDs and certificate issuance using Node.js, Express, SendGrid and PDFKit. Scaled to 450+ concurrent users and enforced security best practices.",
    stack: ["Node.js", "Express.js", "JavaScript", "MongoDB", "Nginx", "PM2", "SendGrid", "PDFKit", "REST APIs"],
    image: "/assets/work/ahapn.png",
    live: "https://ahapnng.org",
    github: ""
  },
  {
    num: 2,
    category: "E-commerce",
    title: "Kaizen Brand",
    description:
      "Responsive e-commerce platform (React & Tailwind) with Node/Express APIs for payments, notifications and order tracking. Implemented CI/CD, Paystack integration and modular UI components to improve performance and development speed.",
    stack: ["React", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "MongoDB", "Paystack", "CI/CD", "REST APIs"],
    image: "/assets/work/kaizen.png",
    live: "https://www.kaizenbrand.shop/",
    github: "https://github.com/Zuxxypml/kaizen-brand-v2"
  },
  {
    num: 3,
    category: "Tourism",
    title: "Travaye NG",
    description:
      "Travel/tourism platform built with React and Node.js. Designed and deployed scalable RESTful APIs, integrated backend services and implemented custom algorithms to reduce latency and improve reliability.",
    stack: ["React", "Node.js", "Express.js", "JavaScript", "MongoDB", "REST APIs", "Performance Optimization"],
    image: "/assets/work/travaye.png",
    live: "https://www.travaye.ng/",
    github: "https://github.com/tra-vaye/travaye-frontend"
  },
  {
    num: 4,
    category: "Full Stack",
    title: "Curator",
    description:
      "Full-stack media curation platform (Next.js) with Firebase storage, audio metadata extraction, encryption and authentication. Built modular UI components for consistent UX and maintainability.",
    stack: ["Next.js", "React", "JavaScript", "Firebase", "TypeScript", "ffmpeg", "Authentication", "Security"],
    image: "/assets/work/curator.png",
    live: "https://curator-murex.vercel.app/login",
    github: ""
  },
  {
    num: 5,
    category: "Productivity",
    title: "Codehub",
    description: "Secure storage for project files and secrets built with Node.js and MongoDB.",
    stack: ["Node.js", "Express.js", "JavaScript", "MongoDB", "Security", "REST APIs"],
    image: "/assets/work/codehub.jpg",
    live: "https://github.com/Zuxxypml/codehub",
    github: "https://github.com/Zuxxypml/codehub"
  },
  {
    num: 6,
    category: "Fitness",
    title: "Workout Buddy",
    description: "Workout tracking app for logging sessions (React + Node).",
    stack: ["React", "Node.js", "Express.js", "JavaScript", "MongoDB", "REST APIs"],
    image: "/assets/work/workout.png",
    live: "https://zuxxy-workout-buddy.netlify.app/",
    github: "https://github.com/Zuxxypml/workout-buddy-frontend"
  },
  {
    num: 7,
    category: "Crypto",
    title: "Deem Exchange",
    description:
      "Crypto exchange demo with realtime prices and basic payment flows. (Legacy project.)",
    stack: ["Node.js", "Express.js", "JavaScript", "MongoDB", "REST APIs"],
    image: "/assets/work/deem.png",
    live: "https://github.com/Zuxxypml/Deem",
    github: "https://github.com/Zuxxypml/Deem"
  },
  {
    num: 8,
    category: "E-commerce",
    title: "Zuxxy Mart",
    description: "Early e-commerce project demonstrating basic store functionality.",
    stack: ["Node.js", "Express.js", "JavaScript", "Bootstrap", "MongoDB", "REST APIs"],
    image: "/assets/work/zuxxy-mart.jpg",
    live: "http://zuxxy-mart.vercel.app/",
    github: "https://github.com/Zuxxypml/Zuxxy-mart"
  },
  {
    num: 9,
    category: "Game",
    title: "Simon Game",
    description: "Classic Simon Game built with JavaScript and jQuery.",
    stack: ["JavaScript", "jQuery", "HTML5", "CSS"],
    image: "/assets/work/simon.jpg",
    live: "https://github.com/Zuxxypml/Simon-game",
    github: "https://github.com/Zuxxypml/Simon-game"
  },
  {
    num: 10,
    category: "Utility",
    title: "Weather Application",
    description: "Weather app using OpenWeatherMap API to display current conditions.",
    stack: ["JavaScript", "HTML5", "CSS", "API Integration"],
    image: "/assets/work/weather.jpg",
    live: "https://weather-checker-app-by-zuxxy.netlify.app/",
    github: "https://github.com/Zuxxypml/Weather-Checker-App"
  }
];



export default function Work() {
  const [projectsData, setProjectsData] = useState<projectsType>(projects[0]);

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
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline" aria-hidden="true">
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
                    className="text-accent text-lg font-medium focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {item}
                    {index < projectsData.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border  */}
              <div className="border border-white/20"></div>
              {/* Buttons  */}
              <div className="flex items-center gap-4">
                {/* Live project button  */}
                {projectsData.live && (
                  <Link
                    href={projectsData.live}
                    target="_blank"
                    aria-label="Live Demo"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-150">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button  */}
                {projectsData.github && (
                  <Link
                    href={projectsData.github}
                    target="_blank"
                    aria-label="Github Source"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all duration-150">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Source</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
              aria-label="Project portfolio carousel"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden shadow-lg shadow-black/40">
                      {/* Overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Project image  */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category} project screenshot`}
                          fill
                          quality={80}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          loading={index < 2 ? "eager" : "lazy"}
                          className="object-cover"
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
