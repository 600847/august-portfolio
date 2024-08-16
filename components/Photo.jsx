"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[468px] xl:h-[468px] mix-blend-lighten absloute">
          <Image
            alt="profile-photo"
            src="/assets/profile-photo.png"
            priority
            quality={100}
            fill
            className="object-contain rounded-full border-accent/70 border-2 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
