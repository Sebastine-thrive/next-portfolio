import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";

import { MyLinks } from "./data/Data";

const Footer = () => {
  return (
    <div className="relative w-full h-[14rem] bg-[#00a78e] mb-0 ">
      <div className="text-center">
        <p className="text-[white] pt-4  text-[20px] md:text-[28px] ">
          {" "}
          <span className="mr-4  text-[16px] md:text-[24px] ">
            {" "}
            &copy; 2022{" "}
          </span>{" "}
          <b>
            {" "}
            <Link
              href="https://sebastine-ogu.vercel.app/"
              className=" text-[16x] md:text-[24px]"
            >
              {" "}
              Sebastine Ogu{" "}
            </Link>{" "}
          </b>{" "}
        </p>

        <div className="mb-4">
          <p className="capitalise pt-8 text-white font-medium">
            Connect With Me{" "}
          </p>
          <div className="flex items-center justify-center py-4">
            {MyLinks.map((link) => (
              <Link href={link.href} target="_blank" key={link.href}>
                <div className=" p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-white">
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-to-top button */}

      <div className=" absolute flex justify-center py-12 right-[10vw] top-[5vh] z-10">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-20, 0, 20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="rounded-full p-2 cursor-pointer hover:scale-120 ease-in duration-300 bg-black  hover:bg-white"
          >
            <HiOutlineChevronDoubleUp
              className=" rounded-full bg-transparent  text-white hover:text-black "
              size={25}
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
