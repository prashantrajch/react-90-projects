import React, { useState } from "react";
import InputField from "./InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ data, error }) => {
  const { label, id, type, placeholder } = data;
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className="inputfield">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="password-container">
        <input
          type={isPasswordShow ? "text" : type}
          name={id}
          id={id}
          placeholder={placeholder}
          className="input"
        />
        <span
          className="pass-icon"
          onClick={() => setIsPasswordShow(!isPasswordShow)}
        >
          {isPasswordShow ? (
            <FaEyeSlash color="var(--accent-color)" />
          ) : (
            <FaEye color="var(--secondary-color)" />
          )}
        </span>
      </div>
      {error && <p className="error">{error[id]}</p>}
    </div>
  );
};

export default PasswordInput;
