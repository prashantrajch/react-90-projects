import React from "react";

const SelectInput = ({ data,error }) => {
  const { label, name, id, options } = data;

  return (
    <div className="inputfield">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select name={name} id={id} className="select">
        <option value="" className="option">
          ---Please Select State ---
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="option">
            {option.text}
          </option>
        ))}
      </select>
      {error && error[id] &&<p className="error">{error[id]}</p> }
    </div>
  );
};

export default SelectInput;
