"use client";

import { FaJava, FaJs, FaFigma, FaAndroid, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSpringboot,
  SiDotnet,
  SiTypescript,
  SiReact,
  SiMicrosoftazure,
  SiCsharp,
  SiCplusplus,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiPowerbi,
} from "react-icons/si";
import { IoSchool } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import ExperienceCards from "@/components/ExperienceCards";

// about data
const about = {
  title: "About me",
  description:
    "I'm a passionate software developer with a focus on web and mobile technologies. With over a year of hands-on experience, I enjoy tackling complex problems and creating efficient, user-friendly solutions. My background in Information Technology has equipped me with the skills to work across the full stack, from frontend design to backend architecture. I'm always eager to learn new technologies and improve my skills.",
  info: [
    {
      filedName: "Name",
      fieldValue: "August Helle",
    },
    {
      filedName: "Phone",
      fieldValue: "+47 949 85 665",
    },
    {
      filedName: "Experience",
      fieldValue: "1+ years",
    },
    {
      filedName: "Nationality",
      fieldValue: "Norway",
    },
    {
      filedName: "Email",
      fieldValue: "august.helle1@gmail.com",
    },
    {
      filedName: "Languages",
      fieldValue: "Norwegian, English",
    },
  ],
};

// experience data
const experience = {
  icon: <MdBusinessCenter />,
  title: "My experience",
  description:
    "A collection of hands-on experiences working with cutting-edge technologies and contributing to real-world projects in software development.",
  items: [
    {
      company: "Stacc Escali",
      position: "Bachelor Thesis Project",
      duration: "January 2024 - May 2024",
      projectDescription:
        "Developed a fullstack solution using Next.js and ASP.NET to automate, optimize and organize the distribution of PowerBI reports, addressing the problem of a time-consuming manual process for Stacc Escali",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver /> },
        { name: "Power BI", icon: <SiPowerbi /> },
      ],
    },
    {
      company: "Stacc Escali",
      position: "Software Developer Intern",
      duration: "August 2023 - December 2023",
      projectDescription:
        "Developed a fullstack solution to manage customer orders and project deadlines using NextJS and ASP.NET, with a primary focus on front-end development",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver /> },
        ,
      ],
    },
  ],
};

// education data
const education = {
  icon: <IoSchool />,
  title: "My education",
  description:
    "Pursuing a degree in Information Technology with a specialization in Web- and Mobile Technology, focusing on both practical and theoretical aspects of modern software development.",
  items: [
    {
      institution: "Western University of Applied Science - (HVL)",
      degree: "Information Technology",
      spesalization: "Web- and Mobile Technology",
      grade: "GPA: 3.8",
      duration: "August 2021 - June 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "A comprehensive set of skills acquired through academic projects, internships, and self-driven learning. These skills span programming languages, frameworks, and tools crucial for modern software development.",
  skillsType: [
    {
      title: "Programming Languages",
      items: [
        {
          icon: <FaJava />,
          name: "Java",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <FaHtml5 />,
          name: "HTML 5",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
        },
        {
          icon: <SiCsharp />,
          name: "C#",
        },
        {
          icon: <TbSql />,
          name: "SQL",
        },
      ],
    },
    {
      title: "Frameworks & Libaries",
      items: [
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <SiSpringboot />,
          name: "SpringBoot",
        },
        {
          icon: <SiReact />,
          name: "React.js",
        },
        {
          icon: <SiDotnet />,
          name: ".NET",
        },
        {
          icon: <FaAndroid />,
          name: "Android SDK",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind",
        },
      ],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="maw-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[458px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-[30px] my-[30px] ">
                    {experience.items.map((item, i) => {
                      return <ExperienceCards key={i} item={item} />;
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="maw-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[458px] ">
                  <ul className="grid grid-cols-1  gap-[30px] mx-[30px] my-[30px] ">
                    {education.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_4px_rgba(255,26,26,1)] "
                        >
                          <div className="w-full flex justify-between items-center">
                            <span className="text-accent">{item.duration}</span>
                            <span> {item.grade}</span>
                          </div>
                          <h3 className="text-xl  ">{item.degree}</h3>
                          <h3 className="text-white/60 ">
                            {item.spesalization}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                {skills.skillsType.map((skillTypes, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col text-center xl:text-left mb-4">
                        <h3>{skillTypes.title}</h3>
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:gap-[30px] gap-4">
                        {skillTypes.items.map((skill, j) => {
                          return (
                            <li key={j}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className=" w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title} </h3>
                  <p className="text-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((items, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{items.filedName}</span>
                        <span className="text-xl">{items.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
