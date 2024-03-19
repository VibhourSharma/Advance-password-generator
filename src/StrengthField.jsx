import React from "react";
import { usePassword } from "./context/Password";

const StrengthField = () => {
  const { generatedPassword } = usePassword();

  const passwordStrength = () => {
    if (generatedPassword.length === 0) {
      return "Generate Password";
    } else if (generatedPassword.length <= 5) {
      return "Too weak";
    } else if (generatedPassword.length <= 9) {
      return "medium";
    } else if (generatedPassword.length <= 14) {
      return "strong";
    } else {
      return "too-strong";
    }
  };

  const strengthClass = passwordStrength();

  return (
    <div className="strength-field">
      <span>Strength</span>
      <span className={`password-strength ${strengthClass}`}>
        {passwordStrength()}
      </span>
    </div>
  );
};

export default StrengthField;
