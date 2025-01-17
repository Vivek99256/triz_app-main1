import React from "react";

export default function ResourceCard({ title, description }) {
  return (
    <div className="flex flex-col text-[18px] font-semibold leading-none text-neutral-700">
      <h3 className="self-start text-center">{title}</h3>
      <p className="mt-2.5 text-sm leading-4 text-zinc-600">{description}</p>
    </div>
  );
}
