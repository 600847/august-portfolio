"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  { num: "01", title: "fullstack-development", description: "coding" },
  {
    num: "02",
    title: "database handling",
    description: "constuction databases",
  },
  {
    num: "03",
    title: "backend architecture",
    description: "i know how to make clean architecture",
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
              <div key={i} className="flex-1 flex flex-col  gap-6 ">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div>{service.num}</div>
                  <BsArrowDownRight />
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
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
