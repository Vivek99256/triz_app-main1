import * as React from "react";

const NavigationItem = ({ text }) => {
  return (
    <div className="basis-auto" tabIndex={0} role="button">
      {text}
    </div>
  );
};

export default NavigationItem;