import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import Typewriter from 'typewriter-effect'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'
import { REGISTRATION_PAGE } from '../../../routes'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopSection = () => {
  const { push } = useHistory()
  return (
    <div className="entire-top-section">
      <Row className="flex-container">
        <Col sm={24} lg={9} className="flex-1">
          <h1>
            Kickstart your web <br /> development <br/> career
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
              onClick={() => push(REGISTRATION_PAGE) }
            />
          </div>
          <div className="small-screen-button">
            <GeneralButton
              buttonText="Signup for free"
              width="119px"
              height="28px"
              fontSize="12px"
              onClick={() => push(REGISTRATION_PAGE) }
            />
          </div>
        </Col>
        <Col sm={24} lg={15} className="flex-2">
          {/* <img src="https://res.cloudinary.com/dcft8yhab/image/upload/v1622034367/carbon.png" alt="" /> */}
          <LazyLoadImage
            alt="a code snippet"
            className="top-image"
            src="https://res.cloudinary.com/dcft8yhab/image/upload/v1622034367/carbon.png" // use normal <img> attributes as props
          />
        </Col>
      </Row>
    </div>
  )
}

export default TopSection
