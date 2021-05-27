import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'
import { REGISTRATION_PAGE } from '../../../routes'

const DisclaimerSection = () => {
  const { push } = useHistory()
  return (
    <div className="entire-disclaimer-section">
      <Row className="entire-disclaimer-flex-container">
        <Col sm={24} lg={11} className="flex-1">
          <img src="https://res.cloudinary.com/dcft8yhab/image/upload/v1622080394/Vectary_texture_4.png" alt="" />
        </Col>
        <Col sm={24} lg={13} className="flex-2">
          <div className="inner-disclaimer-container">
            <p className="header">Go Straight to your Dahsboard!</p>
            <p className="text">
              You’ll be taken  into the classroom immediately you signup. Our free lessons would help you understand
              the structure of the program as well as help you make the decision to follow through till the end of the
              mentorship or not. We do hope you proceed till the end but you are not under any obligation to continue
              if you’re not convinced.
            </p>
            <GeneralButton
              buttonText="Signup for free"
              height="44px"
              width="190px"
              fontSize="16px"
              onClick={() => push(REGISTRATION_PAGE) }
            />
          </div>
        </Col>
      </Row>
      <img className="mobile-screen-laptop-img" src="https://res.cloudinary.com/dcft8yhab/image/upload/v1622080394/Vectary_texture_4.png" alt="" />
    </div>
  )
}

export default DisclaimerSection
