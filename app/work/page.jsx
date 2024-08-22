"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    number: "01",
    category: "Fullstack",
    title: "Power BI Distribution",
    desciption:
      "A bachelor’s project where I developed a distribution system for Stacc Escali. The system automates and optimizes the distribution of Power BI reports, streamlining a previously manual and time-consuming process.",
    stack: [
      { name: "Next.js" },
      { name: ".NET" },
      { name: "Microsoft SQL Server" },
    ],
    image: "/assets/work/bachelor-project/reports-page.png",
    live: "",
    github: "",
  },
  {
    number: "02",
    category: "frontend",
    title: "Escali Order System",
    desciption:
      "An intern project where I built an order management system for Stacc Escali. The system enhances the user experience by providing a seamless interface for order processing and management.",
    stack: [
      { name: "Next.js" },
      { name: ".NET" },
      { name: "Microsoft SQL Server" },
    ],
    image: "/assets/work/intern-project/dashboard-page.png",
    live: "",
    github: "",
  },
  {
    number: "03",
    category: "Software Development",
    title: "Sunsystem",
    desciption:
      "A project for the DAT 154 course in Software Architecture and Development. I created a simulation of our solar system, showcasing the application of software architecture principles to model complex systems.",
    stack: [{ name: ".NET Desktop" }],
    image: "/assets/work/software-project/sunsystem.png",
    live: "",
    github: "https://github.com/600847/Solsystemet",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12  xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-accent">
                {project.number}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60"> {project.desciption}</p>

              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, i) => {
                  return (
                    <li key={i} className="text-xl text-accent">
                      {item.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href="/work">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href="/work">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center ">
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          layout="fill"
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
