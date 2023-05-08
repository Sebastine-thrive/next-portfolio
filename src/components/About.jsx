import React from "react";
import Image from "next/image";
import myImage from "../../public/sebastine.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full text-gray-700 min-h-screen md:h-screen mx-auto flex items-center py-16"
    >
      <div className="max-w-[1240px] pt-24 mx-auto sm:flex flex-col sm:w-screen justify-center items-center align-center">
        <motion.h3
          className="title text-[#00a78e] py-2 font-extrabold text-xl uppercase tracking-widest text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          About Me
        </motion.h3>
        <div className="sm:flex sm:m-0 ">
          <motion.p
            className="p-4 sm:w-full mx-[0.5rem] sm:text-sm md:text-lg  bg-white rounded-lg font-serif "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            {" "}
            I'm a web developer with a background in teaching mathematics and
            data processing at the secondary school level. My experience with
            mathematics has helped me approach problem-solving and code
            organization in a structured and logical way.
            <br />
            <br />
            As a web developer, I am skilled in creating and maintaining
            websites and web applications. I have spent about 15 months learning and using front-end
            technologies. I have a strong understanding of HTML, CSS, JavaScript; CSS
            frameworks/libraries such as Bootstrap, SASS, TailwindCSS;
            Javascript, REACT, NEXTJS and various
            other programming technologies. I am always looking for ways to
            improve the user experience and make websites more visually
            appealing, responsive and accessible.
            <br />
            <br />
            I enjoy learning and leveraging on relevant technologies in solving problems and providing utility.
            <br />
            <br />
            I am a team player who believes in achieving more with like-minded people. I
            possess great communication skills, the ability to collaborate, a
            positive attitude and good work ethics.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
