import React, { useState } from "react";
import "./styles.scss";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const PasswordInput = ({
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
  placeholder,
  icon,
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

      <Form name="normal_login" className="login-form">
        <Form.Item name="username">
          <Input.Password
            suffix={icon}
            className="input"
            style={{
              backgroundColor: `${inputColor}`,
              color: `${inputTextColor}`,
            }}
            onFocus={() => setActive(true)}
            onBlur={handleOnBlur}
            type={type}
            value={inputValue}
            placeholder={placeholder}
            onChange={(event) => {
              onChange(event);
              setInput(event.target.value);
            }}
            {...rest}
            name={name}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default PasswordInput;
