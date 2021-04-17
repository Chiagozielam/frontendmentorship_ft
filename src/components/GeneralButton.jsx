import React from 'react';
import { Button } from 'antd';
import { string } from 'prop-types'

const GeneralButton = ({ buttonText, onClick, borderRadius = '20px', width = '200px', height = '48px', fontSize = '18px', disabled }) => {
  return (
    <div>
      <Button onClick={onClick} disabled={disabled} type="primary" style={{backgroundColor: "#F14A03", borderRadius: `${borderRadius}`, border: "none", height: `${height}`, width: `${width}`, fontSize: `${fontSize}`}}>
        {buttonText}
      </Button>
    </div>
  )
}

GeneralButton.propTypes = {
  buttonText: string.isRequired
}

export default GeneralButton
