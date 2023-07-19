import React from "react";
import Image from "next/image";
import myImage from "../../public/sebastine.jpg";
// import Resume from "../../public/assets/resume/01Sebastine_Ogu_Front-end_Web_developer.pdf";
import { motion } from "framer-motion";
import Link from "next/link";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full text-gray-700 min-h-screen md:h-screen mx-auto flex items-center py-16"
    >
      <div className="max-w-[1240px] pt-24 mx-auto sm:flex flex-col sm:w-screen justify-center items-center align-center">
        <motion.h2
          className="title text-[#00a78e] py-2 font-extrabold text-xl uppercase tracking-widest text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          About Me
        </motion.h2>
        <div className="sm:flex sm:m-0 ">
          <motion.p
            className="p-4 sm:w-full mx-[0.5rem] sm:text-sm md:text-lg  bg-[#C37120] text-white rounded-lg font-serif "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            I'm a web developer skilled in creating and maintaining websites and
            web applications. I have spent the past eighteen months learning and
            providing solutions using front-end technologies such as HTML, CSS,
            CSS frameworks/libraries such as Bootstrap, SASS, TailwindCSS;
            Javascript, REACT, NEXTJS and various other programming
            technologies. I am always looking for ways to improve the user
            experience by making websites more visually appealing, responsive
            and accessible.
            <br />
            <br />
            I learn and leverage on relevant technologies in solving problems
            and providing utility.
            <br />
            <br />
            As a team-player, I believe in achieving more with focus-minded team
            members. I possess great communication skills, the ability to
            collaborate, a positive attitude and good work ethics.
            <br />
            Do{" "}
            <Link
              href={"/#contact"}
              className="text-[black]"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              get in touch
            </Link>
            {""} with me.
          </motion.p>

         
        </div>
      </div>
    </div>
  );
};
