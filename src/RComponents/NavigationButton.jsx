import React from "react";
import { useRouter } from 'next/router';
export default function NavigationButton({ label, url, isActive, onClick }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(url); 
  };
  return (
    <button
      onClick={handleClick}
      onMouseEnter={onClick}
      className={`self-stretch px-3.5 py-2 transition-colors duration-200 ${
        isActive
          ? "bg-gray-200 text-slate-500 rounded-md"
          : "text-white hover:bg-gray-200/20"
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
