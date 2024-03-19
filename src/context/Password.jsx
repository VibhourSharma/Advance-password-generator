import React, { createContext, useState, useContext } from "react";

const PasswordContext = createContext(null);
export const usePassword = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
  const [range, setRange] = useState(1);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&*+=?";

    let chars = "";

    if (upperCase) chars += uppercaseChars;
    if (numbers) chars += numberChars;
    if (lowerCase) chars += lowercaseChars;
    if (symbols) chars += symbolChars;

    let password = "";

    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    return password;
  };

  const handleGeneratePassword = () => {
    if (!upperCase && !lowerCase && !numbers && !symbols) {
      setError("Select at least one Checkbox");
      setTimeout(() => {
        setError("");
      }, 3000);
      setGeneratedPassword("");
    } else {
      const password = generatePassword();
      setGeneratedPassword(password);
      setError("");
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        range,
        setRange,
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
        error,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
