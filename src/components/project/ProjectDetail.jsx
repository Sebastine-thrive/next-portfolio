// import Image from "next/image";
import Image from "next/legacy/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";

const ProjectDetail = ({ data }) => {
  return (
    <div className="w-full overflow-x-hidden ">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover	"
          src={data?.image}
          alt="ecommerce project image"
          layout="fill"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full p-4 text-white z-10  ">
          <h2 className="text-center"> {data?.title} </h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-3 gap-8 pt-8 mb-8 ">
        <div className="col-span-4">
          <h2 className="my-4">Overview</h2>
          <p className="bg-white rounded-lg font-serif p-4">
            {data?.description}
          </p>

          <div className="flex justify-between items-center">
            <Link href={data?.url} target="_blank">
              <button className="px-8 py-2 mt-4 mr-8 hover:text-[white]">
                View
              </button>
            </Link>

            <Link href="/#projects">
              <div className=" text-blue-700 hover:bg-[#FB923C] hover:text-[white] hover:p-2 hover:rounded-xl cursor-pointer sm:w-auto h-auto flex items-center">
                <HiOutlineChevronLeft />
                <p className="ml-1 ">Back</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2 shadow-xl shadow-green-100 bg-black/80 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold text-blue-200 p-2"> Technologies Used:</p>
            <div className=" flex justify-between gap-x-4 gap-y-2 text-white ">
              {data?.tech?.map((text) => (
                <p className="text-white py-2 flex items-center" key={text}>
                  <RiRadioButtonFill className="pr-1" />
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
