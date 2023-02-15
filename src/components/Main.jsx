import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

export const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center m-0'>
            <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
                <div>
                   
                    <h1 className='py-2 text-gray-700'> Hi, I'm <span className='text-[#00a78e]'> Sebastine </span>  </h1>
                    <h1 className='py-2 text-orange-400 sm:text-[1.5rem] lg:text-[2rem] tracking-wide text-lg'> A Front-end Web Developer</h1>
                    <p className='text-orange-500 text-sm tracking-widest py-2'>Let's build something innovative together </p>

                    <p className='py-8 text-gray-600 max-w-[70%] m-auto text-base'> I'm a front-end web developer specializing in building and designing exceptional digital experiences. I'm focused on building responsive, scalable web applications. </p>

                    <div className='flex items-center justify-between  m-auto py-4 max-w-[330px]'>
                        <Link
                            href='https://github.com/Sebastine-thrive'
                            target='_blank'

                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>

                        <Link
                            href='https://www.linkedin.com/in/sebastine-ogu-b36324144'
                            target='_blank'

                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-105 ease-in duration-400'>
                                <FaLinkedinIn />
                            </div>
                        </Link>

                        <Link
                            href='mailto:sebastinoptimum@gmail.com'
                            target='_blank'

                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-105 ease-in duration-400'>
                                <AiOutlineMail />
                            </div>
                        </Link>

                        <Link
                            href='https://twitter.com/sebasious1'
                            target='_blank'

                        >
                            <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-105 ease-in duration-400'>
                                <FaTwitter />
                            </div>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}
