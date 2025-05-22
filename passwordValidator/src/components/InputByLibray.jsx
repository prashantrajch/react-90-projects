import React, { useState } from "react";
import validator from "validator";

const InputByLibray = () => {
  const [active, setActive] = useState(false);
  const handleValidatePassword = (e) => {
    const { value } = e.target;
    console.log(value);
    if (validator.isStrongPassword(value)) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div className="card">
      <h1>This password is check by validator library</h1>
      <label htmlFor="password">Enter Password: </label>
      <input
        type="text"
        placeholder="Enter you password to check strength"
        onChange={handleValidatePassword}
      />
      {active ? (
        <p className="success">Password is strong </p>
      ) : (
        <p className="error">Password is not strong </p>
      )}
    </div>
  );
};

export default InputByLibray;
