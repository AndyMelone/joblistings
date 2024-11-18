import React from "react";

interface InputTextProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  id,
  label,
  placeholder,
  className,
  value,
  onChange,
}: InputTextProps) {
  return (
    <fieldset className="mb-[15px] flex  justify-between  flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 my-3">
      <label className={`text-base md:text-base ${className}`} htmlFor={id}>
        {label}
      </label>
      <input
        className="inline-flex h-[35px]  flex-1 items-center justify-center rounded px-2.5 text-base leading-none  shadow-[0_0_0_1px]  outline-none focus:shadow-[0_0_0_2px] "
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
}
