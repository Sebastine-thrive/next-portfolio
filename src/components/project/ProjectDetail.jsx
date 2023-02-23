import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ProjectDetail = ({ data }) => {
    return (
        <div className='w-full overflow-x-hidden '>
            <div className='w-screen h-[50vh] lg:h-[60vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    src={data?.image}
                    alt='ecommerce project image'
                    layout='fill'
                    objectFit='cover'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full p-4 text-white z-10  '>
                    <h2 className='text-center'> {data?.title} </h2>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-3 gap-8 pt-8 mb-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p>
                        {data?.description}
                    </p>

                    <Link
                        href={data?.url}
                        target='_blank'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 hover:text-[white]'>
                            View
                        </button>
                    </Link>

                    <Link
                        href={data?.github}
                        target='_blank'
                    >
                        <button className='px-8 py-2 mt-4 hover:text-[white]'> Code
                        </button>
                    </Link>
                </div>

                <div className='col-span-3 md:col-span-2 shadow-xl shadow-green-300 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold p-2'> Technologies</p>
                        <div className='lg:grid grid-cols-3 md:grid-cols-1'>

                            {data?.tech?.map((t) => (
                                <p className='text-gray-600 py-2 flex items-center' key={t}>
                                    <RiRadioButtonFill className='pr-1' /> {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <p className='underline text-[#00a78e] cursor-pointer sm:w-4 h-2'>
                    <Link href='/#projects'>
                        Back
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ProjectDetail;