import React from 'react';
import Image from 'next/image';
import myImage from '../../public/sebastine.jpg';
import { motion } from "framer-motion";

export const About = () => {
    return (
        <div id='about' className='w-full text-gray-700 min-h-screen md:h-screen mx-auto flex items-center my-16'>
            <div className='max-w-[1240px] pt-24 mx-[1rem] sm:flex sm:w-screen  lg:grid lg:grid-cols-4 gap-8'>
                <div className='sm:flex sm:flex-col sm:m-0  lg:col-span-3 '>
                    <motion.h3
                        className='title text-[#00a78e] py-2 font-extrabold text-xl uppercase tracking-widest text-center'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2.5 }}
                    >
                        About Me
                    </motion.h3>

                    <p className="p-4 sm:w-full sm:text-sm md:text-lg  bg-white rounded-lg font-serif "> Hello, I'm <span className='text-[#00a78e] font-bold'> Sebastine </span>, a web developer with a background in teaching mathematics. My experience in teaching has helped me approach problem-solving and code organization in a structured and logical way.
                        <br />
                        <br />

                        As a web developer, I am skilled in creating and maintaining websites and web applications. I have experience in front-end technologies: a strong understanding of HTML, CSS, JavaScript; CSS frameworks/libraries such as Bootstrap, SASS, TailwindCSS; Javascript libraries (REACT) and frameworks(NEXTJS) and various programming technologies. I am always looking for ways to improve the user experience and make websites more visually appealing, responsive and accessible.
                        <br />
                        <br />

                        I'm passionate about software development as it allows me to combine my love of technology and mathematics. I enjoy keeping up with new technologies and learning new skills, and I'm always looking for ways to improve my work.
                        <br />
                        <br />

                        I possess great communication skills, the ability to collaborate, a positive
                        attitude and good work ethics.

                        I am a team player who is able to work well with others and take on leadership roles when necessary, to deliver high-quality websites and web applications.
                    </p>
                </div>
                <div className='md:flex md:align-center md:mt-[2rem]  lg:w-[120%] h-[100%] lg:mt-0 px-auto col-span-1 justify-center items-center shadow-xl shadow-gray rounded-xl py-4 hover:scale-101 ease-in duration-500'>
                    <Image className='rounded-xl' width='auto' height='auto' src={myImage} alt="Sebastine's picture" />
                </div>

            </div>
        </div >
    )
}
