import React, { useEffect, useState } from "react";

const InputByManual = () => {
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const character = "!@#$%_)(*&^*";

    if (
      isExists(letter, password) &&
      isExists(letter.toUpperCase(), password) &&
      isExists(number, password) &&
      isExists(character, password) &&
      password.length >= 8
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [password]);

  const isExists = (all, value) => {
    for (let i = 0; i < all.length; i++) {
      if (value.includes(all[i])) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="card">
      <h1>This password is check by manual code</h1>
      <label htmlFor="password">Enter Password: </label>
      <input
        type="text"
        placeholder="Enter you password to check strength"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {active ? (
        <p className="success">Password is strong </p>
      ) : (
        <p className="error">Password is not strong </p>
      )}
    </div>
  );
};

export default InputByManual;
