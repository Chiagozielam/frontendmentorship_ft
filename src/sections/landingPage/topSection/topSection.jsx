import React from 'react'
import { Row, Col } from 'antd'
import Typewriter from 'typewriter-effect'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'

const TopSection = () => {
  return (
    <div className="entire-top-section">
      <Row className="flex-container">
        <Col sm={24} lg={9} className="flex-1">
          <div className="image-container">
          </div>
        </Col>
        <Col sm={24} lg={15} className="flex-2">
          <h1>
            Kickstart your <br/> web development <br/> career
          </h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("<p>Transition from any career and join others in <br/> learning frontend web development from <br/> scratch</p>").start()
            }}
            options = {{
              delay: 0.2,
              cursor: " "
            }}
          />
          <div className="large-screen-button">
            <GeneralButton
              buttonText="Signup for free"
            />
          </div>
          <div className="small-screen-button">
            <GeneralButton
              buttonText="Signup for free"
              width="119px"
              height="28px"
              fontSize="12px"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TopSection
