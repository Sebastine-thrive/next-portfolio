import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo/logo.png';

export const About = () => {
    return (
        <div id='about' className='w-full text-gray-700 md:h-screen mx-auto px-6 flex items-center  py-16'>
            <div className='max-w-[1240px]  mx-[2rem] md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h3 className='py-4 text-[#00a78e] text-xl uppercase tracking-widest text-center'>About Me</h3>

                    <p className='py-2 text-lg'>
                        I am a former Mathematics teacher who is now a web developer. I am able to bring my ability to break down complex concepts and explain them in a clear and concise manner to my work as a web developer.
                    </p>


                    <p className='text-lg py-2'> As a web developer, I am highly-skilled in creating and maintaining websites and web applications. I have experience in front-end  tehnologies, with a strong understanding of HTML, CSS, JavaScript; CSS frameworks/libraries such as Bootstrap, SASS, TailwindCSS; Javascript libraries (REACT) and frameworks(NEXTJS) and various programming technologies. I am always looking for ways to improve the user experience and make websites more visually appealing, responsive and accessible. </p>

                    <p className='text-lg py-2'>I am a problem solver and have a knack for finding creative solutions to complex challenges. I am passionate about keeping up to date with the latest technologies, trends, and best practices in web development. I am always eager to acquire new skills and to stay ahead of the curve in the ever-evolving world of web development.
                    </p>

                    <p className='text-lg py-2'>
                        I possess great communication skills, the ability to collaborate, a positive
                        attitude and good work ethics.

                        I am a team player who is able to work well with others and take on leadership roles when necessary, to deliver high-quality websites and web applications. </p>
                    <p className='py-2'>Some of my projects</p>
                </div>
                <div className='w-full h-auto m-auto flex justify-center items-center shadow-xl shadow-gray rounded-xl p-4 hover:scale-110 ease-in duration-500'>
                    <Image className='rounded-xl' width={600} height={400} src={logo} alt='my picture' />
                </div>

            </div>
        </div >
    )
}