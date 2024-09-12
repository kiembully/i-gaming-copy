"use client";
import React, { useState } from "react";
import { cn } from "../../../../../lib/utils";
import style from "./styles.module.scss";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  error?: string;
  variant?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type,
  error,
  variant = "",
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleVariant = (value: string) => {
    const new_val = value;
    switch (new_val) {
      case "userEntryInput":
        return style.userEntryInput;
      default:
        return null;
    }
  };

  return (
    <div className={`${className ? className : ""} relative w-full`}>
      <label
        className={`absolute left-6 font-semibold transition-all duration-200 ease-in-out 
          ${isFocused || value ? "top-2 text-xs text-slate-300" : "top-3 text-gray-500"}`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          handleVariant(variant),
          `w-full px-2 py-3 border rounded-md focus:outline-none focus:ring-2 
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-600"}`,
        )}
      />
      {error && <p className="text-red-500 text-sm ml-2 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
