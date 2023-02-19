import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { MyLinks } from './skillsData/Data';

export const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center m-0'>
            <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
                <div>

                    <p className='px-2  justify-center font-normal '> 
                        <span className='sm:text-[2rem]  md:text-[2.5rem]'> Hi, I'm </span> 
                        <motion.span
                            className=' pl-2 sm:text-[2.5rem]  md:text-[3rem] font-bold text-[#00a78e]'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        > Sebastine
                        </motion.span>
                    </p>
                    <p className='text-orange-400 sm:text-[1.5rem] sm:py-1 lg:text-[1.5rem] lg:py-2 tracking-wide text-lg'> A Front-end Web Developer</p>
                    <motion.p
                        animate={{
                            scale: [1, 1.5, 1.5, 1]
                        }}
                        transition={{ delay: 3 }}

                        className=' let-us text-gray-900 text-sm sm:py-1 tracking-widest lg:py-2'>Let's build something innovative together </motion.p>

                    <p className='py-8 text-gray-600 max-w-[70%] m-auto text-base'> I'm focused on building and designing exceptional digital experiences that are responsive, interactive and scalable.</p>

                    <div className='flex items-center justify-between  m-auto py-4 max-w-[330px]'>

                        {MyLinks.map((links) => (
                            <Link
                                href={links.href}
                                target='_blank'
                            >
                                <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-400'>
                                    {links.icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
