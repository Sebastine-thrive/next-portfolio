import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const ProjectItems = ({ data }) => {
  return (
    <div id="projects" className="w-full min-h-screen px-4 mt-24 bg-white">
      <div className="max-w-[1240px] px-4 py-16 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="title text-[#00a78e] uppercase tracking-widest font-extrabold text-xl text-center py-2"
        >
          Portfolio
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-center sm:text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px]  "
        >
          Some of my projects
        </motion.h2>
        <div className=" flex flex-wrap justify-center m-auto">
          {data?.map((project) => {
            return (
              <div
                className="flex sm:w-full md:w-[50%] lg:w-[33%] justify-center p-4"
                key={project.id}
              >
                <div className=" relative flex items-center justify-center my-8 h-auto w-full bg-[#55a89c] p-4 group rounded-md hover:bg-gradient-to-r from-[#00a78e] to-[#3cb371] hover:border-0">
                  <div className="  max-h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className=" group-hover:opacity-10  "
                    />
                  </div>

                  <div className="hidden sm:h-auto  group-hover:flex absolute flex-col text-center items-center justify-center my-2">
                    <h3 className="sm:text-xl md:text-2xl text-orange-300 tracking-wider text-center mt-2">
                      {" "}
                      {project.title}{" "}
                    </h3>
                    <p className="p-2 text-white text-center">{project.tech}</p>

                    <div className="text-center w-[6rem] my-2 h-auto">
                      <Link href={`/projects/${project.title}`}>
                        <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                          {" "}
                          Details{" "}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
