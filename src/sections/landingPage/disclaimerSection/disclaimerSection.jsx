import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'

const DisclaimerSection = () => {
  return (
    <div className="entire-disclaimer-section">
      <Row>
        <Col span={9} className="flex-1">
        </Col>
        <Col span={15} className="flex-2">
          <div className="inner-disclaimer-container">
            <p className="header">No upfront payment!</p>
            <p className="text">
              You’ll be taken  into the classroom immediately you signup. Our free lessons would help you understand
              the structure of the program as well as help you make the decision to follow through till the end of the
              mentorship or not. We do hope you proceed till the end but you are not under any obligation to continue
              if you’re not convinced.
            </p>
          </div>
          <GeneralButton
            buttonText="Signup for free"
          />
        </Col>
      </Row>
    </div>
  )
}

export default DisclaimerSection
