import AddDjobsForm from "@/components/shared/addDjobsForm";
import WorkItem from "@/components/shared/workItem";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative h-24 sm:h-28 md:h-32   w-full bg-[hsl(180,29%,50%)]  bg-header-mobile md:bg-header-desktop flex justify-center items-center ">
          <div
            className={`flex items-center justify-between px-4  absolute bottom-0  h-16 w-4/5 bg-[hsl(180,52%,96%)]  translate-y-8 mx-auto rounded-lg shadow-md`}
          >
            <div className="flex flex-grow overflow-scroll  items-center gap-3">
              <button className="group flex items-center justify-center space-x-2 bg-[hsl(180,29%,50%)] bg-opacity-20 rounded-lg">
                <p className="text-[hsl(180,29%,50%)] font-bold px-2 py-1 ">
                  Frontend
                </p>
                <div className="bg-[hsl(180,29%,50%)] p-2 rounded-r-lg group-hover:bg-black">
                  <IoMdClose color="white" />
                </div>
              </button>
            </div>

            <button className="group ml-5">
              <p className="text-gray-500 font-semibold group-hover:underline group-hover:text-[hsl(180,29%,50%)] group-active:opacity-70">
                Effacer
              </p>
            </button>
          </div>
        </div>
        <div className="bg-[hsl(180,52%,96%)] flex-grow flex-1 overflow-y-auto ">
          <div className="my-12 ">
            <div className="flex w-4/5 mx-auto justify-between items-center mb-14 md:mb-4">
              <p className="text-[hsl(180,8%,52%)]">Vous avez 25 Djobs</p>
              <AddDjobsForm />
            </div>
            <div className="gap-14 md:gap-8 flex flex-col ">
              {/* WORK LIST */}
              <WorkItem />
              <WorkItem />
              <WorkItem />
              <WorkItem />
              <WorkItem />
              <WorkItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
