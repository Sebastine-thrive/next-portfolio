import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import contact from '../../public/assets/contact/contact_image.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MyLinks } from './data/Data';
import { motion } from "framer-motion";


export const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen h-2 mt-16 mx-auto' >
            <div className='title  max-w-[1240px] w-full mx-auto px-2 pt-24 pb-12 text-center'>
                <motion.h3
                    className='text-xl tracking-widest uppercase text-[#00a78e]'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Contact
                </motion.h3>

                <motion.h2
                    className='py-2 z-10'
                    initial={{ opacity: 0.5, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    Get in Touch
                </motion.h2>

                <div className='grid lg:grid-cols-5 gap-8 z-50'>

                    {/* left part of the contact */}

                    <div className='col-span-3 lg:col-span-2 w-full h-full  shadow-xl  rounded-[1rem] p-4'>
                        <div className='lg:p-4 h-full'>
                            <div className='w-full py-2 '>
                                <Image
                                    src={contact}
                                    width={200}
                                    height={220}
                                    alt='typing message image'
                                    className='w-full rounded-xl z-20 hover:scale-105 ease-in duration-300'
                                />
                            </div>
                            <div>
                                <p className='py-4'>  I am available for freelance, contract or full-time positions. Do get in touch! </p>
                            </div>

                            <div>
                                <p className='uppercase pt-8 font-semibold'>Connect With Me </p>
                                <div className='flex items-center justify-between py-4'>
                                    {
                                        MyLinks.map((link) => (
                                            <Link
                                                href={link.href}
                                                target='_blank'
                                                key={link.href}

                                            >
                                                <div className='rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 
                                                hover:text-orange-400 hover:shadow-orange-400'>
                                                    {link.icon}
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right part */}
                    <div className='col-span-3 w-full h-auto shadow-xl  rounded-[1rem] lg:p-4'>
                        <div className='p-4'>

                            <form action="https://formspree.io/f/xyyobbal" method="POST">                                
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2 my-4'>

                                <div className='flex flex-col '>
                                    <input
                                        className='border-2 rounded-lg p-3 flex' placeholder='Name' type="text"
                                        name='name'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <input
                                        className='border-2 rounded-lg p-3 flex ' type="number" name='phone Number' placeholder='Phone Number'
                                    />
                                </div>
                            </div>

                                <div className='flex flex-col py-2  my-4' >
                                    <input
                                        className='border-2 rounded-lg p-3 flex'
                                        type="email" name='email' placeholder='Email from'
                                    />
                                </div>

                                <div className='flex flex-col py-2  my-4'>
                                    <input
                                        className='border-2 rounded-lg p-3 flex '
                                        type="text" name='subject' placeholder='Subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2 my-4' >
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        type='text'
                                        name='message'
                                        placeholder='Message'
                                        cols="30" rows="4"
                                    >
                                    </textarea>
                                </div>
                                <button className='w-full p-4 text-white mt-4'> Send Message </button>
                            </form>
                        </div>
                    </div>
                </div >

                {/* Scroll-to-top button */}

                < div className='flex justify-center py-12' >
                    <Link href='/' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#009E60]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div >

            </div >
        </div >
    )
}
