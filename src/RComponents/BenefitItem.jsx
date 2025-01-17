import React from "react";

export default function BenefitItem({ text }) {
  return (
    <div className="flex gap-4 mt-4 text-sm font-semibold text-zinc-700">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/562e0ffb58daf557c94b61ce05f095ad5cc6f5729a8cfda9dd6aa214cef6bbcd?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323"
        className="object-contain shrink-0 w-6 aspect-square"
        alt="Benefit icon"
      />
      <div className="flex-auto">{text}</div>
    </div>
  );
}
