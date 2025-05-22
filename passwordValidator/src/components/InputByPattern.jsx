import React from "react";

const InputByPattern = () => {
  return (
    <div className="card first">
      <h1>This password is check by patter attribute</h1>
      <label htmlFor="password">Enter Password: </label>
      <input
        type="text"
        placeholder="Enter you password to check strength"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$"
        title="Eight or more characters"
        required
      />
      <p className="error">Password is not strong</p>
      <p className="success">Password is strong</p>
    </div>
  );
};

export default InputByPattern;
