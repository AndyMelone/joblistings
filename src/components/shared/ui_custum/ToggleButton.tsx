import React from "react";

interface ToggleButtonProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleButton({
  label,
}: // value,
// onChange,
ToggleButtonProps) {
  return (
    <fieldset className="my-3">
      <label className="inline-flex items-center cursor-pointer ">
        <span className="text-base font-medium text-gray-900 dark:text-gray-300 mr-4">
          {label}
        </span>
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[hsl(180,29%,50%)]"></div>
      </label>
    </fieldset>
  );
}
