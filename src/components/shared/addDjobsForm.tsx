import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function AddDjobsForm() {
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
          <Dialog.Content className="fixed left-1/2 top-1/2 w-72 sm:w-[70vh] lg:w-[90vh]  -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
              Nouveau Djob
            </Dialog.Title>
            <Dialog.Description className="hidden md:block mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
              Créez un nouveau djob pour trouver des candidats qualifiés en un
              rien de temps.
            </Dialog.Description>

            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium leading-none   focus:shadow-[0_0_0_2px]  border border-black   ">
                  Créer
                </button>
              </Dialog.Close>
            </div>
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
