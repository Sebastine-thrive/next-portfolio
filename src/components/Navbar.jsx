import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/logo/logo1.gif';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
// import { useRouter } from 'next/router';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);

    return (
        <div style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-[20] shadow-xl z-[100] '
                    : 'fixed w-full h-[20] z-[100] '}>

            <div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
                <Link href='/' >
                    <Image
                        src={logo} alt='logo'
                        width={100}
                        height={40}
                        className='cursor-pointer'
                    />
                </Link>

                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/" >
                            <li className='ml-10 text-sm font-medium uppercase hover:border-b hover:text-orange-400'>Home</li>
                        </Link>
                        <Link href="/#about" scroll={false}>
                            <li className='ml-10 text-sm font-medium uppercase hover:border-b hover:text-orange-400'>About</li>
                        </Link>
                        <Link href="/#skills" scroll={false}>
                            <li className='ml-10 text-sm font-medium uppercase hover:border-b hover:text-orange-400'>Skills</li>
                        </Link>
                        <Link href="/#projects" scroll={false}>
                            <li className='ml-10 text-sm font-medium uppercase hover:border-b hover:text-orange-400'>Projects</li>
                        </Link>
                        <Link href="/#contact" scroll={false}>
                            <li className='ml-10 text-sm font-medium uppercase hover:border-b hover:text-orange-400'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu  and overlay*/}

            <div className={nav
                ? 'fixed left-0 top-0 w-full h-screen bg-black/60 md:hidden' : ''}>

                {/* side drawer menu */}

                <div className={nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-1000 '
                    : 'fixed left-[-150%] top-0 p-10 ease-in duration-1000'}>

                    <div>
                        <div className='flex w-full items-center justify-between'>

                            <Link href='/' scroll={false}>
                                <Image src={logo}
                                    width={100}
                                    height={40}
                                    className='cursor-pointer'
                                    alt='logo'
                                />
                            </Link>


                            <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer' onClick={handleNav} >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className='mt-30 border-b border-gray-300 my-4'>
                            <p className='text-orange-400 tracking-widest w-[85%] md:w-[90%] py-4 '> Let's build something innovative together</p>
                        </div>

                        <div className='flex flex-col py-4 uppercase'>
                            <ul className=''>
                                <Link href="/" >
                                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b hover:text-orange-400'>Home</li>
                                </Link>
                                <Link href="/#about" scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  hover:border-b hover:text-orange-400'>About</li>
                                </Link>
                                <Link href="/#skills" scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm  hover:border-b hover:text-orange-400'>Skills</li>
                                </Link>
                                <Link href="/#projects" scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b hover:text-orange-400'>Projects</li>
                                </Link>
                                <Link href="/#contact" scroll={false}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-b hover:text-orange-400'>Contact</li>
                                </Link>
                            </ul>
                            <div className='pt-10'>
                                <p className='uppercase tracking-widest text-[#00a78e]'>
                                    Let's connect
                                </p>

                                <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>

                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-green-300'>                                 <FaGithub
                                        href='https://github.com/Sebastine-thrive'
                                    />
                                    </div>

                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-green-300'>                                 <FaLinkedinIn
                                        href='https://www.linkedin.com/in/sebastine-ogu-b36324144'
                                    />
                                    </div>

                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-green-300'>                                 <AiOutlineMail
                                        href='mailto:sebastinoptimum@gmail.com'
                                    />
                                    </div>

                                    <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-green-300'>                                  <FaTwitter
                                        href='https://twitter.com/sebasious1'
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}
