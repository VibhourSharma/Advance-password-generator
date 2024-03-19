import React from "react";
import CheckBoxValue from "./CheckBoxValue";
import { usePassword } from "./context/Password";

const PasswordInformation = () => {
  const { range, setRange } = usePassword();

  return (
    <div className="pass-info-main">
      <div className="pass-range">
        <p style={{ fontSize: 18, fontWeight: 600 }}>Character Length:</p>
        <span style={{ fontSize: 32, fontWeight: "bold", color: "#a3ffae" }}>
          {range}
        </span>
      </div>
      <input
        className="range-scroll"
        type="range"
        min="1"
        max="16"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
      <CheckBoxValue />
    </div>
  );
};

export default PasswordInformation;
