import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import contact from "../../public/assets/contact/contact_image.png";
import { MyLinks } from "./data/Data";

export const Contact = () => {
  return (
    <div id="contact" className="w-full my-4 mx-auto">
      <div className="title max-w-[1240px] w-full mx-auto px-2 pt-24 pb-12 text-center">
        <motion.h2
          className="text-xl tracking-widest font-extrabold uppercase text-[#00a78e]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Contact
        </motion.h2>

        <motion.h2
          className="py-2 z-10 sm:text-orange-400 sm:text-[20px] md:text-[24px] lg:text[28px]"
          initial={{ y: -100, opacity: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8 z-50">
          {/* left part of the contact */}

          <div className="col-span-3 lg:col-span-2 w-full mx-[0.2rem] h-full shadow-xl  rounded-[1rem] p-4 ">
            <div className="lg:p-4 h-full">
              <div className="w-full py-2 ">
                <Image
                  src={contact}
                  width={200}
                  height={220}
                  alt="typing message image"
                  className="w-full rounded-xl z-20 hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <p className="py-4">
                  {" "}
                  I am available for freelance projects, contract or full-time
                  positions. Do get in touch!{" "}
                </p>
              </div>

              <div>
                <p className="uppercase pt-8 font-semibold">Connect With Me </p>
                <div className="flex items-center justify-between py-4">
                  {MyLinks.map((link) => (
                    <Link href={link.href} target="_blank" key={link.href}>
                      <div
                        className="rounded-full shadow-lg shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 
                                                hover:text-orange-400 hover:shadow-orange-400"
                      >
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right part */}
          <div className="col-span-3 w-full h-auto shadow-xl  rounded-[1rem] lg:p-4">
            <div className="p-4">
              <form action="https://formspree.io/f/xyyobbal" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 my-4">
                  <div className="flex flex-col ">
                    <input
                      className=" rounded-lg p-3 flex"
                      placeholder="Name"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      className="rounded-lg p-3 flex "
                      type="number"
                      name="phone Number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2  my-4">
                  <input
                    className=" rounded-lg p-3 flex"
                    type="email"
                    name="email"
                    placeholder="Email from"
                  />
                </div>

                <div className="flex flex-col py-2  my-4">
                  <input
                    className=" rounded-lg p-3 flex "
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col py-2 my-4">
                  <textarea
                    className="rounded-lg p-3 flex"
                    type="text"
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="4"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white mt-4">
                  {" "}
                  Send Message{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
