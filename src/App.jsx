import React from "react";
import ResultField from "./ResultField";
import PasswordInformation from "./PasswordInformation";

const App = () => {
  return (
    <div className="main-background">
      <p className="heading">Password Generator</p>
      <ResultField />
      <PasswordInformation />
    </div>
  );
};

export default App;
