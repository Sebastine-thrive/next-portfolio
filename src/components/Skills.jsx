import Image from 'next/image';
import React from 'react';
import { Skillset } from './data/Data';
import { motion } from "framer-motion";

export const Skills = () => {
    return (
        <div id='skills' className='w-full min-h-screen md:h-screen px-2 my-16  py-8 '>
            <div className='max-w-[1240px] mx-auto py-16 text-center justify-center'>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className='title py-2 text-[#00a78e] text-center text-xl font-bold tracking-widest uppercase'
                >My Skills
                </motion.h3>
                <motion.h2
                    initial={{ y: -100, opacity: 0.4 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                >Technologies I use
                </motion.h2>

                <div className='flex flex-wrap justify-center text-center gap-8 mx-auto px-10 mt-16'>

                    {
                        Skillset.map((skill) => {
                            return (
                                <div
                                    className='flex flex-wrap text-center'
                                    key={skill.id}
                                  
                                >

                                    <motion.div className='inline-flex flex-col hover:scale-105 ease-in duration-500'
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 2 }}
                                    >

                                        <Image src={skill.image} alt='html5 logo' className=' bg-white rounded-xl shadow-[0_3px_10px_rgba(0,158,96,1)] w-[5.5rem] h-[5.5rem] m-0 p-[5px] md:w-[7.5rem] md:h-[7.5rem]  md:p-[20px] md:m-[5px] lg:w-[11.875rem] lg:h-[11.25rem]'
                                            loading="lazy"
                                         />
                                        <span className='mt-2 capitalize text-[#00a78e] cursor-pointer'>
                                            <a href={skill?.url}>
                                                {skill.name}
                                            </a>
                                        </span>
                                    </motion.div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
