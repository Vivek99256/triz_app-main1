import * as React from "react";

export function BenefitCard({ title, benefits, className }) {
  return (
    <div
      className={`px-4 py-4 mt-6 max-w-full bg-white rounded-lg ${className}`}
      style={{
        color:'rgba(61, 96, 149, 1)'
    }}
    >
      <span className="text-lg text-cyan-900">{title}</span>
      <ol>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <span className="text-sm text-cyan-900">{benefit}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
