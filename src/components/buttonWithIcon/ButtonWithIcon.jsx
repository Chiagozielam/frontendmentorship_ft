import React from 'react';
import { Button } from 'antd';
import { string } from 'prop-types'
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
const ButtonWithIcon = ({ buttonText, icon, textColor, bgcolor, iconColor,  }) => {
  return (
    <Link to="/" className="icon-btn">
      <Button type="primary" className="btn" style={{ backgroundColor: `${bgcolor}`}}>
        <span style={{color: `${iconColor}` }}><FontAwesomeIcon icon={icon}/></span>
        <span className="btn-text" style={{color: `${textColor}` }}>{buttonText}</span>
      </Button>
    </Link>
  )
}

ButtonWithIcon.propTypes = {
  buttonText: string.isRequired
}

export default ButtonWithIcon
