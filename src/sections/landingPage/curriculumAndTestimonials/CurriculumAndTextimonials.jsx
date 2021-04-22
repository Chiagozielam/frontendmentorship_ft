import React, { useState } from 'react'
import CurriculumCard from '../../../components/cards/curriculumCard/CurriculumCard'
import { Row, Col } from 'antd'
import './styles.scss'
import { curriculumObjectArray, mentorshipBonusesArray, testimonialsArray } from './data'
import BonusCard from '../../../components/cards/bonusCard/BonusCard'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import TestimonialCard from '../../../components/cards/testimonialCard/TestimonialCard'
const CurriculumAndTestimonialsContainer = () => {
  const [bonusCardCurrentNumber, setBonusCardCurrentNumber] = useState(0)
  const onPreviousBonusArrowClick = () => {
    if(bonusCardCurrentNumber <= 0) return
    setBonusCardCurrentNumber(bonusCardCurrentNumber - 1)
  }
  const onNextBonusArrowClick = () => {
    if(bonusCardCurrentNumber >= mentorshipBonusesArray.length - 1) return
    setBonusCardCurrentNumber(bonusCardCurrentNumber + 1)
  }

  return (
    <div className="entire-curriculum-and-testimonials-section">
      <div className="curriculum-container">
        <div className="heading-container">
          <p className="header">Mentorship Curriculum</p>
          <p className="sub-header">A breakdown of the topics covered in the mentorship program</p>
        </div>
        <Row>
        {
          curriculumObjectArray.map( item => (
            <Col span={12} lg={6}>
              <CurriculumCard />
            </Col>
          ))
          }
        </Row>
        
        <div className="heading-container" style={{marginTop: "8%"}}>
          <p className="header">Mentorship Bonuses</p>
          <p className="sub-header">Extra bonuses you get immediately you signup for the program</p>
        </div>
        <div className="bonus-card-container">
          <BonusCard
            image={mentorshipBonusesArray[bonusCardCurrentNumber].image}
            heading={mentorshipBonusesArray[bonusCardCurrentNumber].heading}
            description={mentorshipBonusesArray[bonusCardCurrentNumber].description}
          />
          <div className="swipe-arrows-container">
            <div className="arrow" onClick={onPreviousBonusArrowClick}>
              <ArrowLeftCircle size={30}/> <br /> Previous
            </div>
            <div className="arrow" onClick={onNextBonusArrowClick}>
              <ArrowRightCircle size={30}/> <br /> Next
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        <Row style={{ justifyContent: "space-evenly" }}>
          {
            testimonialsArray.map( testimonial => (
              <Col sm={24} lg={7}>
                <TestimonialCard
                  testimonialText={testimonial.testimonialText}
                  image={testimonial.image}
                  name={testimonial.name}
                  job={testimonial.job}
                />
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default CurriculumAndTestimonialsContainer

