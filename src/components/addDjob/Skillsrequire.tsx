import React from "react";
import { FancyBox } from "../craft /fancy-box";

interface Props {
  prev: () => void;
}

export default function SkillsRequires({ prev }: Props) {
  let languages = {
    datas: [
      { value: "java", label: "Java", color: "#FFC107" },
      { value: "python", label: "Python", color: "#FFC107" },
      { value: "javascript", label: "Javascript", color: "#FFC107" },
    ],
    labelPlaceholder: "Selectionner les technologies requises",
    searchPlaceholder: "Rechercher...",
  };

  let skills = {
    datas: [
      { value: "java", label: "Java", color: "#FFC107" },
      { value: "python", label: "Python", color: "#FFC107" },
      { value: "javascript", label: "Javascript", color: "#FFC107" },
    ],
    labelPlaceholder: "Selectionner les compétences requises",
    searchPlaceholder: "Rechercher...",
  };

  return (
    <>
      <div className="space-y-5 mb-5">
        <div className="space-y-2">
          <label htmlFor="language">
            Selectionner les technologies requises
          </label>
          <FancyBox
            options={languages.datas}
            placeholder={languages.labelPlaceholder}
            onCreateOption={() => {}}
            onNewValueChange={() => {}}
            newValue={""}
            newPlaceholder={"Ajouter une nouvelle compétence"}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="language">
            Selectionner les compétences requises
          </label>
          <FancyBox
            options={languages.datas}
            placeholder={languages.labelPlaceholder}
            onCreateOption={() => {}}
            onNewValueChange={() => {}}
            newValue={""}
            newPlaceholder={"Ajouter une nouvelle compétence"}
          />
        </div>
      </div>
      <div className="mt-[25px] flex justify-end gap-2 bottom-5 right-5 absolute">
        <button
          onClick={() => prev()}
          className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium  border border-black   "
        >
          Précédent
        </button>

        <button
          onClick={() => {}}
          className="inline-flex h-[35px] items-center justify-center rounded  px-[15px] font-medium  border border-black   "
        >
          Creer
        </button>
      </div>
    </>
  );
}
