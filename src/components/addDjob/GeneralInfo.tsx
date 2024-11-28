import React from "react";
import InputText from "../shared/ui_custum/InputText";
import ToggleButton from "../shared/ui_custum/ToggleButton";

interface Props {
  next: () => void;
}

export default function GeneralInfo({ next }: Props) {
  return (
    <>
      <div>
        <InputText id="company" label="Entreprise" placeholder="Meldo" />

        <fieldset className="my-3">
          <label className="block">
            <p className="my-1 text-base">Logo de l&apos;entreprise</p>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[hsl(180,29%,50%)] file:text-white hover:file:bg-opacity-75 file:disabled:opacity-50 file:disabled:pointer-events-none"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </label>
        </fieldset>

        <ToggleButton label="Est-ce une nouvelle offre" />

        <ToggleButton label="Est-ce en vedette" />

        <div className="mt-[25px] flex justify-end gap-2 bottom-5 right-5 absolute">
          <button
            onClick={() => next()}
            className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium  border border-black   "
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}
