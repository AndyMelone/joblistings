import React from "react";

interface Props {
  prev: () => void;
}

export default function SkillsRequires({ prev }: Props) {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
