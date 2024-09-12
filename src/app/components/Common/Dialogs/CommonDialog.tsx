"use client";
import React from "react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const CommonModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable background scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed px-6 inset-0 flex items-center justify-center z-50">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`relative rounded-lg shadow-lg transform transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${className ? className : "bg-white"}`}
      >
        {children}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-200 z-50"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CommonModal;
