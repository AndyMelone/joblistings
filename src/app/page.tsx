import WorkItem from "@/components/shared/workItem";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-36  w-full bg-[hsl(180,29%,50%)]  bg-header-mobile md:bg-header-desktop flex justify-center items-center ">
          <div
            className={`absolute bottom-0  h-16 w-4/5 bg-[hsl(180,52%,96%)]  translate-y-8 mx-auto rounded-lg shadow-md`}
          ></div>
        </div>
        <div className="bg-[hsl(180,52%,96%)] flex-grow flex-1 overflow-y-auto ">
          {/* WORK LIST */}
          <div className="my-20 gap-14 md:gap-8 flex flex-col ">
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </div>
        </div>
      </div>
    </>
  );
}
