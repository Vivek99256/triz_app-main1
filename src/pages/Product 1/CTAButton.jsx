import * as React from "react";
import { useRouter } from "next/router";  

export default function CTAButton({ text, className }) {
  const router = useRouter(); 

 
  const handleClick = () => {
    router.push("/contactGlobal"); 
  };

  return (
    <button 
      className={className}
      tabIndex={0}
      role="button"
      aria-label={text}
      style={{
        background: 'rgba(61, 96, 149, 1)'
      }}
      onClick={handleClick} 
    >
      {text}
    </button>
  );
}
