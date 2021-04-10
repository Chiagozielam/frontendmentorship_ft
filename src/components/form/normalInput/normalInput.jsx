import React, { useState } from 'react';
import './styles.scss';

const NormalInput = ({
  onChange, label, type, name, formikProps, formikKey, ...rest
}) => {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState('');

  const handleOnBlur = () => {
    if (input) {
      return setActive(true);
    }
    return setActive(false);
  };
  return (
    <div className="normal-input-container">
      <label className={active ? 'active' : 'non-active'}>{label}</label>
      <input
        className="input"
        onFocus={() => setActive(true)}
        onBlur={handleOnBlur}
        type={type}
        onChange={(event) => {
          onChange(event);
          setInput(event.target.value);
        }}
        {...rest}
        name={name} />
    </div>
  );
};

export default NormalInput;
