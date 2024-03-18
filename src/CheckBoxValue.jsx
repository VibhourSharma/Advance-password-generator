import React from "react";
import StrengthField from "./StrengthField";

const CheckBoxValue = () => {
  return (
    <div className="checkbox-values-main">
      <label htmlFor="uppercase">
        <input type="checkbox" className="custom-checkbox" />
        Include UpperCase Letters
      </label>
      <label htmlFor="lowercase">
        <input type="checkbox" className="custom-checkbox" />
        Include LowerCase Letters
      </label>
      <label htmlFor="numbers">
        <input type="checkbox" className="custom-checkbox" />
        Include Numbers
      </label>
      <label htmlFor="symbols">
        <input type="checkbox" className="custom-checkbox" />
        Include Symbols
      </label>
      <StrengthField />
      <button className="generate-button">Generate</button>
    </div>
  );
};

export default CheckBoxValue;
