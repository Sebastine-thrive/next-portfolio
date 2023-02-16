import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { AiTwotoneFileMarkdown } from 'react-icons/ai';

// import { ProjectItem } from './ProjectItem';

export const ProjectItems = ({ data }) => {
    // console.log(data)
    return (
        <div id='projects' className='w-full min-h-screen px-4 my-16'>
            <div className='max-w-[1240px] px-4 py-16 mx-auto'>
                <h3 className='text-[#00a78e] uppercase tracking-widest  text-xl text-center py-2'>Portfolio</h3>
                <h2 className='text-center'>Some of my projects </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    {data.map((project) => {
                        return (
                            <div className='flex' key={project.id}>

                                <div className='relative flex items-center justify-center mt-8 h-auto w-full shadow-xl shadow-green-200 rounded-xl p-4 group hover:bg-gradient-to-r from-[#00a78e] to-[#3cb371]'>
                                    <div>
                                        <Image
                                            src={project.image}
                                            alt='ecommerce project image'
                                            width={400}
                                            height={400}
                                            className='rounded-xl  group-hover:opacity-10' />
                                    </div>

                                    <div className='hidden group-hover:flex absolute flex-col text-center items-center justify-center '>
                                        <h3 className='text-2xl text-orange-300 tracking-wider text-center'> {project.title} </h3>
                                        <p className='pb-4 pt-2 text-white text-center'>{project.tech}</p>

                                        <div className='text-center w-[6rem] h-[2rem]'>
                                            <Link href={`/projects/projects/${project.title}`}>
                                                <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> Details </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

