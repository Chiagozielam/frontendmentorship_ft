import React from 'react'
import { Row, Col } from 'antd'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'

const TopSection = () => {
  return (
    <div className="entire-top-section">
      <Row>
        <Col span={9} className="flex-1">
          <div className="image-container">
          </div>
        </Col>
        <Col span={15} className="flex-2">
          <h1>
            Kickstart your <br/> web development <br/> career
          </h1>
          <p>
            Transition from any career and join others in <br/> learning frontend web development from <br/> scratch
          </p>
          <GeneralButton
            buttonText="Signup for free"
          />
        </Col>
      </Row>
    </div>
  )
}

export default TopSection
