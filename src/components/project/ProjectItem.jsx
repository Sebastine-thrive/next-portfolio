import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiTwotoneFileMarkdown } from 'react-icons/ai';
import ecommerce_image from '../../../public/assets/projects/ecommerce.png'


export const ProjectItem = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-200 rounded-xl p-4 mt-4 group hover:bg-gradient-to-r from-[#00a78e] to-[#3cb371]'>
                {data.map((project) => {
                    return (
                        <>
                            <div>
                                <Image
                                    src={project.image}
                                    key={project.id}
                                    alt='ecommerce project image'
                                    width={400}
                                    height={600}
                                    className='rounded-xl  group-hover:opacity-10' />
                            </div>


                            <div className='hidden group-hover:block absolute  '>
                                <h3 className='text-2xl text-white tracking-wider text-center'> {AiTwotoneFileMarkdown} </h3>
                                <p className='pb-4 pt-2 text-white text-center'>{project.tec}</p>
                                <Link href="sebastine_Ogu.netlify.app">
                                    <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> Details </p>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>


        </>
    )
}
