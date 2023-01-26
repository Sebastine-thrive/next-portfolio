
import Image from 'next/image';
import React from 'react';
import ecommerce_image from '../public/assets/projects/ecommerce.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';



const Easyshop = () => {
    return (
        <div className='w-full '>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh]  bg-black/80 z-10' />
                <Image
                    src={ecommerce_image}
                    alt='ecommerce project image'
                    layout='fill'
                    objectFit='cover'

                />
                <div className='absolute top-[70%] max-w-[1240px] w-full p-4 z-10 text-white'>
                    <h2 > Ecommerce Page</h2>
                    <h3> React JS / GraphQl </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-8'>
                <div className='col-span-4'>
                    <p className='py-2'> Project </p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam dolore, quaerat quisquam veniam harum minima cumque ut! Exercitationem optio inventore nam eaque. Ipsum, quos?
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'> View</button>
                    <button className='px-8 py-2 mt-4'> Code</button>
                </div>
                <div className='col-span-3 md:col-span-1 shadow-xl shadow-green-300 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold p-4'> Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>

                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>

                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                        </div>
                    </div>
                </div>

                <Link href='/#projects'>
                    <p className='underline cursor-pointer'> Back </p>
                </Link>
            </div>
        </div>
    )

}
export default Easyshop