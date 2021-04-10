import React from 'react';
import { Button } from 'antd';
import { string } from 'prop-types'

const GeneralButton = ({ buttonText, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} type="primary" style={{backgroundColor: "#F14A03", borderRadius: "20px", border: "none", height: "48px", width: "200px", fontSize: "18px"}}>
        {buttonText}
      </Button>
    </div>
  )
}

GeneralButton.propTypes = {
  buttonText: string.isRequired
}

export default GeneralButton
