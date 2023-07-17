import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MyLinks } from "./data/Data";

export const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center mx-auto">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="px-2 justify-center font-normal ">
            <motion.span
              className="text-[24px] md:text-[35px] font-bold -scroll-mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi! I'm
            </motion.span>
            <motion.span
              className="font-bold text-[#00a78e] text-[28px] md:text-5xl xl:text-6xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 1,
                duration: 2,
                delay: 0.5,
              }}
            >
              {" "}
              Sebastine
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            viewport={{ once: true }}
            className=" text-gray-600  font-semibold py-2 sm:text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px] sm:py-1 lg:py-2 tracking-wide text-lg"
          >
            A Front-end Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            viewport={{ once: true }}
            className="mt-6 py-4  hidden sm:block font-semibold text-gray-600 w-[90%] max-w-[90%] m-auto text-base"
          >
            I'm focused on delivering value through developing and building
            exceptional digital experiences <br /> that are responsive,
            user-friendly, safe, interactive and scalable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{
              scale: [1, 1.5, 1.5, 1],
            }}
            viewport={{ once: true }}
            transition={{ delay: 3.5 }}
            className=" intro  mt-10 sm:mt-0  font-semibold shadow-green-400 sm:shadow-none text-gray-900  px-4 py-2 text-sm  tracking-widest"
          >
            Let's build something innovative together
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{
              scale: [1, 1.2, 1.2, 1],
            }}
            viewport={{ once: true }}
            transition={{ delay: 4 }}
            className="flex items-center justify-between  m-auto py-4 max-w-[330px]"
          >
            {MyLinks.map((links) => (
              <Link href={links.href} target="_blank" key={links.href}>
                <div className="md:rounded-full md:shadow-md md:shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-orange-400 hover:shadow-orange-400">
                  {links.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
