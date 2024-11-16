import Image from "next/image";
import React from "react";
import { VscSettings } from "react-icons/vsc";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <VscSettings className="group-hover:text-white   hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out " />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="rounded-md bg-white p-2  space-y-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="group   select-none items-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    <button className="group bg-[hsl(180,29%,50%)] bg-opacity-10 rounded-sm p-1 hover:bg-opacity-100 active:bg-opacity-80 origin-bottom hover:rotate-6 hover:transform-gpu hover:scale-110 transition duration-300 ease-in-out ">
                      <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
                        Modifier
                      </p>
                    </button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group select-none items-center rounded-[3px]  text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    <button className="group bg-red-600 bg-opacity-10 rounded-sm p-1 hover:bg-opacity-100 active:bg-opacity-80 origin-bottom hover:rotate-6 hover:transform-gpu hover:scale-110 transition duration-300 ease-in-out ">
                      <p className="text-red-600 font-bold group-hover:text-white group-active:text-white ">
                        Supprimer
                      </p>
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
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
            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 hover:bg-opacity-100 active:bg-opacity-80 hover:origin-bottom hover:-rotate-6 hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out ">
                  <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
                    + 4
                  </p>
                </button>
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content
                  className="flex flex-wrap max-w-72 gap-2  rounded-md bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all  rotate-1 skew-x-1 transform-gpu scale-110 "
                  side="bottom"
                  align="end"
                  sideOffset={5}
                >
                  <button className="group bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 hover:bg-opacity-100 active:bg-opacity-80 ">
                    <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
                      Frontend
                    </p>
                  </button>
                  <HoverCard.Arrow className="fill-white" />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
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
