import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MyLinks } from "./data/Data";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
// import ProfilePic from "../../public/assets/profile-picture/seb.png";
import ProfilePic from "../../public/assets/profile-picture/seb_1.jpg";

import Image from "next/image";

export const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen flex justify-center items-center text-center bg-[#ecf0f3]"
    >
      <div className="home-wrapper max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <div className="flex items-center flex-col lmd:flex-row  ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 1,
                delay: 1.0,
                duration: 2,
              }}
              // className="xxs:w-[180px] h-[150px]"
            >
              <Image
                src={ProfilePic}
                alt="Sebastine's picture"
                width={150}
                height={180}  
                loading="lazy"	
                className="profile-pic mr-0 md:mr-6 mb-4 lmd:mb-0"
              />
            </motion.div>
            <div>
              <h1 className="px-2  text-[24px] md:text-[35px] ">
                <motion.span
                  className="font-semibold -scroll-mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Hi! I'm
                </motion.span>
                <motion.span
                  className="font-bold text-[#00a78e]  text-[26px] md:text-[38px] "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 1,
                    delay: 0.5,
                    duration: 2,
                  }}
                >
                  {" "}
                  Sebastine
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                viewport={{ once: true }}
                className="font-semibold xxs:mt-8 lg:mt-10 sm:mt-2 text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px] sm:py-1 lg:py-2 tracking-wide text-lg"
              >
                I'm a Front-end Web Developer <br />
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                viewport={{ once: true }}
                className="text-black font-semibold sm:text-[16px] md:text-[20px] lg:text[24px] "
              >
                (Javascript, Typescript, ReactJS, NextJS){" "}
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            viewport={{ once: true }}
            className="mt-8 py-4  hidden sm:block font-semibold text-gray-600 w-[90%] max-w-[90%] m-auto text-base"
          >
            I'm focused on delivering value through developing and building
            exceptional digital experiences <br /> that are responsive,
            user-friendly, safe, interactive and scalable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{
              scale: [1, 1.5, 1.5, 1],
            }}
            viewport={{ once: true }}
            transition={{ delay: 3.5 }}
            className=" intro  mt-10 sm:mt-0  font-semibold shadow-green-400 sm:shadow-none text-gray-900  px-4 py-2 text-sm  tracking-widest"
          >
            Let's build something innovative together
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{
              scale: [1, 1.2, 1.2, 1],
            }}
            viewport={{ once: true }}
            transition={{ delay: 4 }}
            className="flex items-center justify-between  m-auto py-4 max-w-[330px]"
          >
            {MyLinks.map((links) => (
              <Link href={links.href} target="_blank" key={links.href}>
                <div className="md:rounded-full md:shadow-md md:shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-400 hover:shadow-orange-400">
                  {links.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll-down  indicator */}
      <div className=" absolute max-w-[30] right-[10vw] xxs:top-[80vh]  sm:top-[550px] z-10">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: [-20, 0, 20] }}
          transition={{
            delay: 5,
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-full p-2 cursor-pointer hover:scale-120 ease-in duration-300 bg-black  hover:bg-white"
        >
          <HiOutlineChevronDoubleDown
            className=" rounded-full bg-transparent  text-white hover:text-black "
            size={25}
          />
        </motion.div>
      </div>
    </div>
  );
};
