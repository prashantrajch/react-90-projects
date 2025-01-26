const InputField = ({ data, error }) => {
  const { label, id, type, placeholder } = data;

  return (
    <div className="inputfield">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="input"
      />
      {error && error[id] && <p className="error">{error[id]}</p>}
    </div>
  );
};

export default InputField;
