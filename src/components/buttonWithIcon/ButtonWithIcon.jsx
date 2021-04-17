import React from 'react';
import { Button } from 'antd';
import { string } from 'prop-types'
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonWithIcon = ({ buttonText, icon, textColor, fontSize, bgcolor, iconColor, iconSize, buttonRadius, onClick }) => {
  return (
    <div className="icon-btn">
      <Button onClick={onClick} type="primary" className="btn" style={{ backgroundColor: `${bgcolor}`, borderRadius: `${buttonRadius}`}}>
        <span style={{color: `${iconColor}`, fontSize: `${iconSize}` }}><FontAwesomeIcon icon={icon}/></span>
        <span className="btn-text" style={{color: `${textColor}`, fontSize: `${fontSize}` }}>{buttonText}</span>
      </Button>
    </div>
  )
}

ButtonWithIcon.propTypes = {
  buttonText: string.isRequired
}

export default ButtonWithIcon
