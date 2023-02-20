import Image from 'next/image';
import React from 'react';
import { Skillset } from './data/Data';
import { motion } from "framer-motion";

// import html_image from '../../public/assets/skills/html.svg';

export const Skills = () => {
    return (
        <div id='skills' className='w-full min-h-screen md:h-screen  px-2 my-16 py-8 overflow-hidden'>
            <div className='max-w-[1240px] mx-auto py-8 text-center justify-center'>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration:2 }}
                    className='py-2 text-[#00a78e] text-center text-xl tracking-widest uppercase'
                >My Skills
                </motion.h3>
                <motion.h2
                    initial={{ x: 500, opacity:0.7 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >Technologies I use
                </motion.h2>

                <div className='flex flex-wrap justify-center text-center gap-8 mx-auto px-10 mt-16'>

                    {
                        Skillset.map((skill) => {
                            return (
                                <div className='text-center flex flex-col w-[12rem]' key={skill.id}>

                                    <div className='bg-white inline-flex flex-col hover:scale-105 ease-in duration-500 rounded-xl shadow-[0_3px_10px_rgba(0,158,96,1)] '>

                                        <Image src={skill.image} alt='html5 logo' className=' w-[11.875rem] h-[11.25rem] p-[1.25rem]' />
                                    </div>
                                    <span className='mt-2 capitalize text-[#00a78e] cursor-pointer'>
                                        <a href={skill?.url}>
                                            {skill.name}
                                        </a></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
