import React from "react";
import InputByPattern from "./components/InputByPattern";
import InputByManual from "./components/InputByManual";
import InputByLibray from "./components/InputByLibray";
import AdvanceInput from "./components/AdvanceInput";

const App = () => {
  return (
    <div className="container">
      <InputByPattern />
      <InputByManual />
      <InputByLibray />
      <AdvanceInput />
    </div>
  );
};

export default App;
