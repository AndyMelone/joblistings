import Image from "next/image";
import React from "react";
import { VscSettings } from "react-icons/vsc";

interface WorkItemsProps {
  className?: string;
}

export default function WorkItem({ className }: WorkItemsProps) {
  return (
    <div
      className={`container bg-[hsl(180,31%,95%)]  w-4/5 block  md:flex md:flex-row p-3 space-x-0 md:space-x-7 rounded-xl drop-shadow-xl mx-auto md:hover:rotate-1 md:hover:skew-x-1 md:transform-gpu md:hover:scale-x-105 md:transition md:duration-300 md:ease-in-out  ${className}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0 justify-between w-20 h-20 relative ">
          <Image
            src="/photosnap.svg"
            alt="Picture"
            layout="fill"
            objectFit="contain"
            className="rounded-full my-auto absolute  top-0 -translate-y-12 md:translate-y-0"
          />
        </div>
        <div className="group active:bg-[hsl(180,29%,50%)] p-1 rounded-full  block md:hidden -translate-y-6">
          <VscSettings className="group-active:text-white" />
        </div>
      </div>

      <div className="w-full -translate-y-8 md:translate-y-0">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <p className="text-[hsl(180,29%,50%)] text-lg font-semibold">
              Worker
            </p>
            <button className="bg-black text-white text-xs font-semibold rounded-2xl px-2 md:hover:bg-opacity-75 active:bg-opacity-65 md:hover:origin-bottom md:hover:rotate-6 md:hover:transform-gpu md:hover:scale-125 md:transition md:duration-300 md:ease-in-out ">
              <p>Feature</p>
            </button>
          </div>
          <button className="group hidden md:block -translate-y-2 hover:bg-[hsl(180,29%,50%)] active:bg-opacity-35 p-1 rounded-full ">
            <VscSettings className="group-hover:text-white      hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out " />
          </button>
        </div>
        <div className="py-1 flex items-center justify-between ">
          <div>
            <p className="font-bold text-lg">Work label</p>
          </div>
          <div className="flex-wrap space-x-2 hidden md:block  mt-3 md:mt-0">
            <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 hover:bg-opacity-100 active:bg-opacity-80 hover:origin-bottom hover:-rotate-6 hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out ">
              <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
                Frontend
              </p>
            </button>
            <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 hover:bg-opacity-100 active:bg-opacity-80 hover:origin-bottom hover:-rotate-6 hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out ">
              <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
                + 4
              </p>
            </button>
          </div>
        </div>
        <div className="flex md:hidden items-center space-x-2 md:space-x-4 border-b-2 md:border-none pb-4 pb:0  ">
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">Date ago</p>
          <div className="w-1 h-1 bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">
            Type of contrat
          </p>
          <div className="w-1 h-1 bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">Location</p>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">Date ago</p>
          <div className="w-1 h-1 bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">
            Type of contrat
          </p>
          <div className="w-1 h-1 bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p className="text-[hsl(180,8%,52%)] text-xs font-medium">Location</p>
        </div>
        <div className="flex flex-wrap gap-2 md:hidden mt-3 md:mt-0">
          <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 active:bg-opacity-100  ">
            <p className="text-[hsl(180,29%,50%)] font-bold group-active:text-white ">
              Frontend
            </p>
          </button>

          <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 active:bg-opacity-100 ">
            <p className="text-[hsl(180,29%,50%)] font-bold group-active:text-white ">
              + 4
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
