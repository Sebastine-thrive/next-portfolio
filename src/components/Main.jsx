import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MyLinks } from "./data/Data";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import ProfilePic from "../../public/assets/profile-picture/seb1.jpg";
// import coder from "../../public/assets/background/coder.svg";

import Image from "next/image";

export const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full max-w-[100vw] h-screen flex justify-center items-center text-center bg-[#ecf0f3] overflow-hidden"
    >
      <div className="home-wrapper max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center z-5">
        <div>
          <div className="flex items-center justify-center flex-col lg:flex-row  ">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              // whileInView={{ opacity: 1 }}
              transition={{
                // type: "spring",
                // bounce: 1,
                delay: 1.0,
                duration: 2,
              }}
            >
              <Image
                src={ProfilePic}
                alt="Sebastine's picture"
                width={170}
                height={150}
                priority
                className="profile-pic w-[170px] h-[150px] mr-0 mb-4 md:mb-0 rounded-md"
              />
            </motion.div>
            <div className="lg:ml-8">
              <h1 className="px-2  text-[24px] md:text-[35px] ">
                <motion.span
                  className="font-semibold -scroll-mb-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Hi! I'm
                </motion.span>
                <motion.span
                  className=" text-[#ff6b08] font-extrabold text-[26px] md:text-[38px] "
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
                transition={{ delay: 2, duration: 2 }}
                viewport={{ once: true }}
                className="developer font-bold xxs:mt-8 lg:mt-10 sm:mt-2 text-orange-400 bg-[#fff] rounded-md sm:text-[20px] md:text-[24px] lg:text[28px] p-1 tracking-wide text-lg shadow-sm shadow-orange-200"
              >
                I'm a Front-end Web Developer <br />
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
                viewport={{ once: true }}
                className=" font-semibold mt-2 sm:text-[16px] md:text-[20px] lg:text[24px] "
              >
                <span className="text-[#fff]">Javascript | </span>{" "}
                <span className="text-[#ff6b08]"> Typescript |</span>{" "}
                <span className="text-[#ff6b08]">ReactJS </span>{" "}
                <span className="text-[#fff]">| NextJS </span>
              </motion.p>
            </div>
          </div>

          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 5, duration: 2 }}
            viewport={{ once: true }}
            className="bio-summary stylish-borders mx-auto mt-24 py-4 hidden sm:block font-semibold text-white w-[90%] md:w-[80%] max-w-[90%] text-base"
          >
            I'm focused on providing business solutions through developing and
            building exceptional digital experiences <br /> that are responsive,
            safe, user-friendly, interactive and scalable.
          </motion.p>
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 9, duration: 3 }}
            className="create-solutions sm:mt-0 text-base font-semibold shadow-custom sm:shadow-none text-gray-900 px-4 mt-2 py-2 tracking-widest"
          >
            Let's create solutions together
          </motion.p>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 5, duration: 2 }}
            className="flex items-center justify-between mx-auto my-2 py-2 max-w-[330px]"
          >
            {MyLinks.map((links) => (
              <Link href={links.href} target="_blank" key={links.href}>
                <div className="  text-blue-700 md:rounded-full md:shadow-md md:shadow-[#312fb9] p-6 cursor-pointer hover:scale-110 ease-in-out duration-500 hover:text-orange-400 hover:shadow-orange-400">
                  {links.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll-down  indicator */}
      <div className=" absolute w-auto right-[10vw] xxs:top-[80vh]  sm:top-[550px] z-10">
        <Link href="/#about">
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
            className="scroll-down-button__main p-2 cursor-pointer hover:scale-120 ease-in duration-300 "
            role="please scroll down"
            id="scroll-down button"
          >
            <HiOutlineChevronDoubleDown
              className="  bg-transparent text-white hover:text-[#ff6b08] "
              size={25}
            />
          </motion.div>
        </Link>
        <Tooltip
          anchorSelect=".scroll-down-button__main"
          place="top"
          content="Scroll down"
          className="hidden lg:block"
        />
      </div>

      {/* Image by <a href="https://www.freepik.com/free-vector/gradient-geometric-shapes-dark-background_6849656.htm#query=portfolio%20background&position=11&from_view=keyword&track=ais&uuid=c94efb3c-e448-4c04-9a4e-a41cb374ce52">Freepik</a> */}

      {/* <a href="https://www.freepik.com/free-vector/modern-desktop-background-geometric-blue-design-vector_18220884.htm#query=portfolio%20background&position=17&from_view=keyword&track=ais&uuid=c94efb3c-e448-4c04-9a4e-a41cb374ce52">Image by rawpixel.com</a> on Freepik */}
    </div>
  );
};
