"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Fullstack Development",
    description:
      "Expert in building scalable and efficient web applications from front-end to back-end.",
  },
  {
    num: "02",
    title: "Database Management",
    description:
      "Proficient in designing, constructing, and optimizing databases for various use cases.",
  },
  {
    num: "03",
    title: "Backend Architecture",
    description:
      "Specialized in creating clean, scalable, and maintainable backend architecture.",
  },
  {
    num: "04",
    title: "UI/UX Design with Figma",
    description:
      "Experienced in creating intuitive and user-friendly designs using Figma.",
  },
];

const Services = () => {
  return (
    <section className="h-full min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => {
            return (
              <div key={i} className="flex-1 flex flex-col  gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
