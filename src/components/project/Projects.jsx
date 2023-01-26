import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ecommerce_image from '../../../public/assets/projects/ecommerce.png'


import { ProjectItem } from './ProjectItem';

export const Projects = ({ data }) => {

    console.log(data)
    // console.log(pageName


    return (
        <div id='projects' className='w-full px-4 '>
            <div className='max-w-[1240px] px-4 py-16 mx-auto'>
                <h3 className='text-[#00a78e] uppercase tracking-widest  text-xl text-center py-2'>Portfolio</h3>
                <h2 className='text-center'>Some of my projects </h2>
                <div className='grid md:grid-cols-2 gap-8'>
{/* 
                    {projectContent.map((project) => {
                        console.log(project)

                        return (
                            <ProjectItem
                               data={data}
                            />
                        )
                    })
                    } */}

                </div>
            </div>
        </div>
    )
}

