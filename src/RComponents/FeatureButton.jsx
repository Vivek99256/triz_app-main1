import React from "react";

export default function FeatureButton({ label }) {
  return (
    <button className="px-4 py-2 rounded-lg bg-neutral-400 bg-opacity-30 hover:bg-opacity-40 transition-colors duration-200">
      {label}
    </button>
  );
}
