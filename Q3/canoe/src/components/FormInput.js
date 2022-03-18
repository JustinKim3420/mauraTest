import React from "react";

const FormInput = ({ inputName, handleChange, value, courseNumber }) => {
  return (
    <div className="form-component">
      <label className="form-label" htmlFor={inputName}>
        {inputName}
      </label>
      <input
        className="form-input"
        type="text"
        id={inputName}
        onChange={(e) => handleChange(e.target.value, courseNumber)}
        value={value}
      />
    </div>
  );
};

export default FormInput;
