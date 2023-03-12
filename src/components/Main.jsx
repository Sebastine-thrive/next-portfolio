import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { MyLinks } from './data/Data';

export const Main = () => {
    return (
        <div id='home' className=' w-full h-screen text-center mx-auto'>
            <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
                <div>

                    <h1 className='px-2 justify-center font-normal  '>
                        <motion.span 
                        className='text-[24px] md:text-[35px] font-bold'
                    
                            initial={{ opacity: 0.6 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Hi! I'm
                        </motion.span>
                        <motion.span
                            className='font-bold text-[#00a78e] sm:text-6xl md:text-7xl '
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ type: "spring", bounce: 1, duration: 2, delay: 1 }}
                        > Sebastine
                        </motion.span>
                    </h1>
                    <p className=' text-gray-600  font-semibold py-1 sm:text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px] sm:py-1 lg:py-2 tracking-wide text-lg'> A Front-end Web Developer</p>
                   

                    <p className='mt-8 py-4  hidden sm:block font-semibold text-gray-600 max-w-[80%] m-auto text-base'> 
                    I'm focused on building and designing exceptional digital experiences that are responsive, interactive and scalable.
                    </p>
                    <motion.p
                        animate={{
                            scale: [1, 1.5, 1.5, 1]
                        }}
                        transition={{ delay: 2 }}
                        className=' let-us  mt-10 sm:mt-0 shadow-sm font-semibold shadow-green-400 sm:shadow-none text-gray-900  px-1 text-sm  tracking-widest '>
                            Let's build something innovative together
                    </motion.p>

                    <div className='flex items-center justify-between  m-auto py-4 max-w-[330px]'>

                        {MyLinks.map((links) => (
                            <Link
                                href={links.href}
                                target='_blank'
                                key={links.href}
                            >
                                <div className= 'rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-400 hover:shadow-orange-400'
                                 >
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
