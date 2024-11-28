"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import InputText from "./ui_custum/InputText";
import ToggleButton from "./ui_custum/ToggleButton";
import MultipleSelect from "./ui_custum/MultipleSelect";
import GeneralInfo from "../addDjob/GeneralInfo";
import PostDetails from "../addDjob/PostDetails";
import SkillsRequires from "../addDjob/Skillsrequire";

export default function AddDjobsForm() {
  const [current, setCurrent] = useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Informations générales",
      content: <GeneralInfo next={next} />,
    },
    {
      title: "Détails du poste",
      content: <PostDetails next={next} prev={prev} />,
    },
    {
      title: "Compétences requises",
      content: <SkillsRequires prev={prev} />,
    },
  ];
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="group mr-4 bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg py-1 px-2 hover:bg-opacity-100 active:bg-opacity-80 hover:origin-bottom  hover:transform-gpu hover:scale-125 transition duration-300 ease-in-out ">
            <p className="text-[hsl(180,29%,50%)] font-bold group-hover:text-white group-active:text-white ">
              Nouveau djob
            </p>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0  data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2   w-full sm:mx-0 sm:w-[70vh] lg:w-[90vh] h-[30rem]  -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
              Nouveau Djob
            </Dialog.Title>
            <Dialog.Description className="hidden md:block mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
              Créez un nouveau djob pour trouver des candidats qualifiés en un
              rien de temps.
            </Dialog.Description>

            <ol className="flex  flex-col  sm:flex-row mb-4 md:items-center w-full p-3 space-y-2 md:space-x-2 md:space-y-0 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={`flex items-center cursor-pointer ${
                    current >= index && "text-[hsl(180,29%,50%)] "
                  } `}
                  onClick={
                    current >= index ? () => setCurrent(index) : undefined
                  }
                >
                  <span
                    className={`flex items-center justify-center w-5 h-5 me-2 text-xs border   rounded-full shrink-0 ${
                      current >= index && "border-[hsl(180,29%,50%)]"
                    } `}
                  >
                    {index + 1}
                  </span>
                  <span className="">{step.title}</span>
                  {index < steps.length - 1 && (
                    <MdOutlineKeyboardDoubleArrowRight className="mx-2 hidden sm:block" />
                  )}
                </li>
              ))}
            </ol>

            <div className="mb-5">{steps[current].content}</div>

            <Dialog.Close asChild>
              <button
                className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11  focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none ransition duration-150 ease-in-out"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
