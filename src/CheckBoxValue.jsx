import React from "react";
import StrengthField from "./StrengthField";
import { usePassword } from "./context/Password";

const CheckBoxValue = () => {
  const {
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    handleGeneratePassword,
    generatedPassword,
  } = usePassword();

  return (
    <div className="checkbox-values-main">
      <label htmlFor="uppercase">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={upperCase}
          onChange={(e) => setUpperCase(e.target.checked)}
        />
        Include UpperCase Letters
      </label>
      <label htmlFor="lowercase">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={lowerCase}
          onChange={(e) => setLowerCase(e.target.checked)}
        />
        Include LowerCase Letters
      </label>
      <label htmlFor="numbers">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={numbers}
          onChange={(e) => setNumbers(e.target.checked)}
        />
        Include Numbers
      </label>
      <label htmlFor="symbols">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={symbols}
          onChange={(e) => setSymbols(e.target.checked)}
        />
        Include Symbols
      </label>
      <StrengthField generatedPassword={generatedPassword} />
      <button className="generate-button" onClick={handleGeneratePassword}>
        Generate
      </button>
    </div>
  );
};

export default CheckBoxValue;
