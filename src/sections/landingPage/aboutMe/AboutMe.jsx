import React from 'react'
import { Col, Row } from 'antd'
import './styles.scss'
import GeneralButton from '../../../components/GeneralButton'

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <Row style={{ justifyContent: "space-between" }}>
        <Col span={9}>
          <img className="image" src="https://res.cloudinary.com/dcft8yhab/image/upload/v1617819068/My_Image.png" alt=""/>
        </Col>
        <Col span={14}>
          <p className="heading">Hi, I'm Daniel Don,</p>
          <div className="body">
            <p>
              I’ll be your lead instructor throughout this mentorship program. <br/>
              3+ years ago, I started my journey building softwares from a 
              level of an absolute beginner! 
            </p>
            <p>
              I have been actively sharing my knowledge and helping people have an
              interesting start  to a career in software development since 2019.
            </p>
            <p>
              I’ve taken the pain to gather a wealth of experience which you can tap from.
              Instead of trying to figure things out for yourself, I already spent a lot of
              time doing that, planning the scheme, carefully arranging what you should learn
              and in the order you should learn them.
            </p>
            <p>
              My Journey started from using a borrowed mobile phone, to
              working and contracting with several people and teams around the world on
              interesting projects. If what you want is a seamless transition from any other
              career to software engineering, I’m waiting for you in class. Signup for free
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

export default AboutMe
