import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiTwotoneFileMarkdown } from 'react-icons/ai';
import ecommerce_image from '../../../public/assets/projects/ecommerce.png'


export const ProjectItem = ({ data }) => {
    // let title , backgroundImg, tech, projectUrl = 

    return (
        <>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-green-200 rounded-xl p-4 mt-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                {data.map((project) => {
                    return (
                        <>
                            <Image src={project.url} alt='ecommerce project image' className='rounded-xl group-hover:opacity-10' />
                            <div className='hidden group-hover:block absolute  '>
                                <h3 className='text-2xl text-white tracking-wider text-center'> {AiTwotoneFileMarkdown} </h3>
                                <p className='pb-4 pt-2 text-white text-center'>{project.tech}</p>
                                <Link href={projectUrl}>
                                    <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> {project.details} </p>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>


        </>
    )
}
