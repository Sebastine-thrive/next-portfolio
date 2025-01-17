import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { MyLinks, MyNavbarLinks } from "./data/Data";
import logo from "../../public/assets/logo/logo_1.gif";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [navBg, setNavBg] = useState("");
  const [activeSection, setActiveSection] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Function to handle navbar shadow on scroll
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    // IntersectionObserver options and callback
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Attaching event listener for scroll
    window.addEventListener("scroll", handleShadow);

    // Observing each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleShadow);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-[3rem] shadow-xl z-[100] bg-opacity-30  "
          : "fixed w-full h-[3rem] z-[100] bg-opacity-0  "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4 }}
          animate={{
            scale: [1, 1.2, 1.2, 1],
          }}
          viewport={{ once: true }}
          className=""
        >
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={50}
              className="cursor-pointer border border-white rounded-md w-[100px] h-[35px] lg:w-[100px] lg:h-[40px]"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            scale: [1, 1.2, 1.2, 1],
          }}
          viewport={{ once: true }}
          transition={{ delay: 4 }}
        >
          <ul className="navlinks hidden md:flex">
            {MyNavbarLinks.map(({ title }, index) => (
              <li
                key={index}
                // className="ml-10 text-sm font-bold text-white capitalize hover:border-b hover:text-orange-400"
                className={`ml-10 text-sm font-bold text-white capitalize hover:border-b ${
                  activeSection === title
                    ? "active border-b-2 border-white text-orange-400 transition-all duration-300 ease-in-out"
                    : ""
                }`}
                onClick={() => scrollToSection(title)}
              >
                {title}
              </li>
            ))}
          </ul>

          <div onClick={handleNav} className="md:hidden text-white">
            <AiOutlineMenu size={25} />
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu  and overlay*/}

      <div
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        {/* side drawer menu */}

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] sm:w-[75%] h-screen bg-[#1c2448] p-10 ease-in duration-1000 "
              : "fixed left-[-150%] top-0 p-10 ease-in duration-1000"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between z-[2]">
              <Link href="/" scroll={false}>
                <Image
                  src={logo}
                  width={100}
                  height={40}
                  className="cursor-pointer border border-white rounded-md w-[100px] h-[35px] "
                  alt="logo"
                />
              </Link>

              <div
                className="text-white rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="mt-30 border-b border-gray-300 my-4">
              <p
                animate={{
                  scale: [1, 1.5, 1.5, 1],
                }}
                transition={{ delay: 2 }}
                className="intro font-medium tracking-widest py-4 "
              >
                {" "}
                Let's create solutions together
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-full  py-4 uppercase">
              <ul className="navlinks w-fit">
                {MyNavbarLinks.map(({ title }, index) => (
                  <li
                    key={index}
                    className={`py-4 capitalize text-sm text-white font-semibold hover:border-b  ${
                      activeSection === title
                        ? "active text-orange-400 transition-all duration-300 ease-in-out"
                        : ""
                    }`}
                
                    onClick={() => {
                      scrollToSection(title);
                      handleNav();
                    }}
                    
                  >
                    {title}
                  </li>
                ))}
              </ul>

              <div className="pt-10 text-center">
                <p className="tracking-widest uppercase w-full text-blue-200">
                  Let's connect
                </p>

                <div className="flex items-center justify-between m-4 ">
                  {MyLinks.map((links) => (
                    <Link key={links.href} href={links.href} target="_blank">
                      <div className="rounded-full mx-2 text-blue-500 shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300  hover:text-orange-400 ">
                        {links.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
