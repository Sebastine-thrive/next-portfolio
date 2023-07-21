import React from "react";
import Link from "next/link";

import { MyLinks } from "./data/Data";

const Footer = () => {
  return (
    <div className="w-full h-[14rem] bg-[#00a78e] mb-0">
      <div className="text-center">
        <p className="text-[white] pt-4  text-[24px] md:text-[32px] ">
          {" "}
          <span className="mr-4  text-[18px] md:text-[28px] ">
            {" "}
            &copy; 2022{" "}
          </span>{" "}
          <b>
            {" "}
            <a href="https://sebastine-ogu.vercel.app/"> Sebastine Ogu </a>{" "}
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
    </div>
  );
};

export default Footer;
