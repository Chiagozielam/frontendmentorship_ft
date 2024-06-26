import React from 'react';
import { Button } from 'antd';
import { string } from 'prop-types'
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonWithIcon = ({ buttonText, icon, textColor, fontSize, bgcolor, boxShadow, iconColor, iconSize, buttonRadius, onClick, padding, textPadding, buttonWidth, buttonHeight, ...rest }) => {
  return (
    <div className="icon-btn">
      <Button onClick={onClick} type="primary" className="btn" style={{ backgroundColor: `${bgcolor}`, boxShadow: `${boxShadow}`, borderRadius: `${buttonRadius}`, padding: `${padding}`, width: `${buttonWidth}`, height: `${buttonHeight}`, ...rest}}>
        <span style={{color: `${iconColor}`, fontSize: `${iconSize}` }}><FontAwesomeIcon icon={icon}/></span>
        <span className="btn-text" style={{color: `${textColor}`, fontSize: `${fontSize}`, padding: `${textPadding}` }}>{buttonText}</span>
      </Button>
    </div>
  )
}

ButtonWithIcon.propTypes = {
  buttonText: string.isRequired
}

export default ButtonWithIcon
