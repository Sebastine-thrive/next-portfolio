import Image from "next/image";
import React from "react";
import { Skillset } from "./data/Data";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full max-h-screen md:h-screen px-2 py-8 overflow-y-hidden bg-[#1c2448]"
    >
      <div className="max-w-[1240px] mx-auto pt-8 text-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="title py-2 text-blue-200 text-center text-xl font-extrabold tracking-widest uppercase"
        >
          My Skills
        </motion.h2>
        <motion.h2
          className="sm:text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px] "
          initial={{ y: -100, opacity: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          Technologies I use
        </motion.h2>

        <div className="flex flex-wrap justify-center text-center gap-8 mx-auto px-10 my-8 ">
          {Skillset.map((skill) => {
            return (
              <div className="flex flex-wrap text-center" key={skill.id}>
                <motion.div
                  className="inline-flex flex-col hover:scale-105 ease-in duration-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Image
                    src={skill.image}
                    alt="html5 logo"
                    className=" bg-white rounded-xl shadow-[0_3px_10px_rgba(0,158,96,1)] w-[5.5rem] h-[5.5rem] m-0 p-[5px] md:w-[7.5rem] md:h-[7.5rem]  md:p-[20px] md:m-[5px] lg:w-[11.5rem] lg:h-[9.5rem] lg:m-[8px]"
                    loading="lazy"
                  />
                  <span className="mt-2 capitalize text-blue-200 cursor-pointer">
                    <a href={skill?.url}>{skill.name}</a>
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
