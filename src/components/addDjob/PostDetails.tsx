import React from "react";
import InputText from "../shared/ui_custum/InputText";
import { FancyBoxSelectOne } from "../craft /fancy-box-one";
import { useContrat } from "@/app/hooks/useContrat";

const data = [
  { value: "fullTime", label: "Temps plein", color: "#FFC107" },
  { value: "PartTime", label: "Temps partiel", color: "#FFC107" },
  { value: "freelance", label: "Freelance", color: "#FFC107" },
];

interface Props {
  next: () => void;
  prev: () => void;
}

export default function PostDetails({ next, prev }: Props) {
  const { contrats } = useContrat();
  console.log(contrats);
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

          <div className="flex gap-3 flex-col md:flex-row  justify-center">
            <FancyBoxSelectOne
              options={contrats}
              isAddNew
              newChange={() => {}}
            />
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
