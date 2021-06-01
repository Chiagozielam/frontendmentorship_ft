import React, { useState } from "react";
import "./styles.scss";

const NormalInput = ({
  onChange,
  label,
  labelPadding,
  inputColor,
  type,
  name,
  formikProps,
  formikKey,
  inputTextColor,
  inputValue,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");

  const handleOnBlur = () => {
    if (input) {
      return setActive(true);
    }
    return setActive(false);
  };
  return (
    <div className="normal-input-container">
      <label
        className={active ? "active" : "non-active"}
        style={{ padding: `${labelPadding}` }}
      >
        {label}
      </label>
      <input
        className="input"
        style={{ backgroundColor: `${inputColor}`, color: `${inputTextColor}` }}
        onFocus={() => setActive(true)}
        onBlur={handleOnBlur}
        type={type}
        value={inputValue}
        onChange={event => {
          onChange(event);
          setInput(event.target.value);
        }}
        {...rest}
        name={name}
      />
    </div>
  );
};

export default NormalInput;
