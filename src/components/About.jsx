import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full text-gray-700 min-h-screen md:h-screen mx-auto flex items-center bg-[#151527]"
    >
      <div className="about-container max-w-[1240px] my-8  mx-auto sm:flex flex-col sm:w-screen justify-center items-center align-center">
        <motion.h2
          className="title text-blue-200 pt-24 font-extrabold text-xl uppercase tracking-widest text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          About Me
        </motion.h2>
        <div className="sm:m-[1rem] ">
          <motion.div
            className="about-me p-4 sm:w-full xss:leading-8 xxs:text-[14px]  lg:leading-6 mx-[0.5rem] my-[1rem] sm:text-sm md:text-lg bg-[#C37120] text-white rounded-lg font-serif "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            <p>
              I'm a web developer skilled in creating and maintaining websites
              and web applications. I leverage technologies such as HTML, CSS,
              CSS frameworks and libraries like Bootstrap, SASS and TailwindCSS.
              Additionally, I utilise Git (specifically GitHub), JavaScript, ReactJS,
              NextJS, and other related technologies. I am constantly seeking
              ways to fulfill business requirements and enhance user experiences
              by enhancing the visual appeal, responsiveness, and accessibility
              of websites and web applications.
              <br />
              <br />
              As a team-player who believes in achieving more with
              focus-minded team-members. I possess good communication skills,
              the ability to collaborate, a positive attitude and overall good work
              ethics.
              <br />
              <Link
                href={"/#contact"}
                className="text-[#312fb9] hover:text-[#fff]"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch
              </Link>
              {""} with me.
            </p>

            <div className="flex justify-start my-8 items-center">
              <div>
                <button className="px-4 py-2 capitalize shadow-none">
                  {" "}
                  <a href="https://mrseb.tiiny.site/" target="blank">
                    {" "}
                    View resume{" "}
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
