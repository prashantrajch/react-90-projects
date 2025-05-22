import React, { useState } from "react";

const AdvanceInput = () => {
  const [progressBarActive, setProgressBarActive] = useState(false);
  const [progressBar, setProgressBar] = useState({
    weak: false,
    medium: false,
    hard: false,
  });

  const handlePasswordCheck = (e) => {
    const { value } = e.target;

    const isWeak = value.length > 0;
    const isMedium = value.length >= 5 && /\d/.test(value);
    const isStrong = value.length >= 8 && /\d/.test(value) && /[@#$%^&*()!]/.test(value);

    setProgressBarActive(isWeak);
    setProgressBar({
      weak: isWeak,
      medium: isMedium,
      hard: isStrong,
    });
  };

  return (
    <div className="card">
      <h1>Password Strength Indicator</h1>
      <label htmlFor="password">Enter Password: </label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password to check strength"
        onChange={handlePasswordCheck}
      />
      {progressBarActive && (
        <>
          <div className="progressContainer">
            <div className={`progressbar weak ${progressBar.weak ? "active" : ""}`}></div>
            <div className={`progressbar medium ${progressBar.medium ? "active" : ""}`}></div>
            <div className={`progressbar strong ${progressBar.hard ? "active" : ""}`}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvanceInput;
