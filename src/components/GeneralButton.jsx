import React from "react";
import { Button } from "antd";
import { string } from "prop-types";

const GeneralButton = ({
  buttonText,
  onClick,
  borderRadius = "20px",
  width = "200px",
  height = "48px",
  fontSize = "18px",
  htmlType,
  disabled,
  fontWeight = "600",
  fontFamily = "Open Sans",
  className,
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        className={className}
        disabled={disabled}
        type="primary"
        htmlType={htmlType}
        style={{
          backgroundColor: "#F14A03",
          borderRadius: `${borderRadius}`,
          border: "none",
          height: `${height}`,
          width: `${width}`,
          fontSize: `${fontSize}`,
          fontWeight: `${fontWeight}`,
          fontFamily: `${fontFamily}`,
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

GeneralButton.propTypes = {
  buttonText: string.isRequired,
};

export default GeneralButton;
