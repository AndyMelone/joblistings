import React from "react";
import InputText from "../shared/ui_custum/InputText";
import MultipleSelect from "../shared/ui_custum/MultipleSelect";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FancyBoxSelectOne } from "../craft /fancy-box-one";

const data = [
  { value: "fullTime", label: "Temps plein", color: "#FFC107" },
  { value: "PartTime", label: "Temps partiel", color: "#FFC107" },
  { value: "freelance", label: "Freelance", color: "#FFC107" },
];

function CustomSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full sm:w-1/2 md:w-1/3">
        <SelectValue placeholder="Selectionner le type de contrat" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type de contrat</SelectLabel>
          <SelectItem value="fullTime">Temps plein</SelectItem>
          <SelectItem value="PartTime">Temps partiel</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

interface Props {
  next: () => void;
  prev: () => void;
}

export default function PostDetails({ next, prev }: Props) {
  return (
    <>
      <div className="">
        <div className="">
          <InputText
            id="position"
            label="Intitulé du poste"
            placeholder="Développeur"
          />

          <InputText id="location" label="Localisation" placeholder="Abidjan" />

          <div className="flex gap-3 flex-col md:flex-row items-center ">
            <FancyBoxSelectOne options={data} isAddNew newChange={() => {}} />
            <FancyBoxSelectOne options={data} isAddNew newChange={() => {}} />
            <FancyBoxSelectOne options={data} isAddNew newChange={() => {}} />
          </div>
        </div>

        <div className="fixed mt-[25px] flex justify-end gap-2 bottom-5 right-5 ">
          <button
            onClick={() => prev()}
            className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium     border border-black   "
          >
            Précédent
          </button>
          <button
            onClick={() => next()}
            className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium   border border-black   "
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}
