import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import CurriculumCard from '../../../components/cards/curriculumCard/CurriculumCard'
import { Row, Col } from 'antd'
import './styles.scss'
import { curriculumObjectArray, mentorshipBonusesArray, testimonialsArray, menteeStoriesArray } from './data'
import BonusCard from '../../../components/cards/bonusCard/BonusCard'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import TestimonialCard from '../../../components/cards/testimonialCard/TestimonialCard'
import GeneralButton from '../../../components/GeneralButton'
import { REGISTRATION_PAGE } from '../../../routes'
import Stories from 'react-insta-stories';
import GeneralModal from '../../../components/modals/general-modal/GeneralModal'
import Video from '../../../components/lessonVideoPlay/lessonVideoPlay'


const CurriculumAndTestimonialsContainer = () => {
  const [bonusCardCurrentNumber, setBonusCardCurrentNumber] = useState(0)
  const [testimonialVideoModalIsOpen, setTestimonialVideoModalIsOpen] = useState(false)
  const [currentTestimonialVideo, setCurrentTestimonialVideo] = useState('')
  const [currentStorySelectedIdx, setCurrentStorySelectedIdx] = useState(0)

  const onPreviousBonusArrowClick = () => {
    if(bonusCardCurrentNumber <= 0) return
    setBonusCardCurrentNumber(bonusCardCurrentNumber - 1)
  }
  const onNextBonusArrowClick = () => {
    if(bonusCardCurrentNumber >= mentorshipBonusesArray.length - 1) return
    setBonusCardCurrentNumber(bonusCardCurrentNumber + 1)
  }

  const onSetCurrentStoryIndex = idx => {
    setCurrentStorySelectedIdx(idx)
  }
  const { push } = useHistory()
  return (
    <div className="entire-curriculum-and-testimonials-section">
      
      {/* <p className="stories-header">Watch Mentee Stories</p>
      <div className="frontend-mentorship-stories-main-container">
        <div className="frontendmentorship-stories-container">
          {
            menteeStoriesArray.map( (mentee, index) => (
              <div onClick={() => onSetCurrentStoryIndex(index)}><img src={mentee.header.profileImage} alt="" /></div>
            ))
          }
        </div>
        <div className="react-insta-stories-container">
          <Stories
            stories={menteeStoriesArray}
            currentIndex={currentStorySelectedIdx}
            defaultInterval={1500}
            width="100%"
            height={468}
            isPaused= {isStoryPaused}
            
          />
        </div>
      </div> */}

      {/* This modal is for the testimonial videos from students */}
      <GeneralModal
        modalOpened={testimonialVideoModalIsOpen}
        setModalOpened={setTestimonialVideoModalIsOpen}
        padding={0}
        width="45%"
      >
        <div className="video-container">
          <Video link={currentTestimonialVideo} />
        </div>
      </GeneralModal>
      <div className="curriculum-container">
        <div className="heading-container">
          <p className="header">Mentorship Curriculum</p>
          <p className="sub-header">A breakdown of the topics covered in the mentorship program</p>
        </div>
        <Row>
        {
          curriculumObjectArray.map( item => (
            <Col span={12} lg={6}>
              <CurriculumCard title={item.title} />
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
        <div className="program-cost-container">
          <p className="program-cost-header">Program Cost</p>
          <div className="inner-cost-container">
            <div className="cost-flex-1">
              <p>₦44,900</p>
              <p>$119.99</p>
            </div>
            <div className="cost-flex-2">
              <p>₦100,000</p>
              <p>$200</p>
            </div>
          </div>
          <div className="signup-button">
              <GeneralButton
                buttonText="Create a free account"
                height="48px"
                width="237px"
                fontSize="16px"
                onClick={() => push(REGISTRATION_PAGE) }
              />
            </div>
        </div>
      </div>
      <div className="testimonials-container">
        <Row style={{ justifyContent: "space-evenly" }}>
          {
            testimonialsArray.map( testimonial => (
              <Col sm={24} lg={7}>
                <TestimonialCard
                  testimonial={testimonial}
                  setTestimonialVideoModalIsOpen={setTestimonialVideoModalIsOpen}
                  onChangeTestimonialVideo = { (videoUrl) => setCurrentTestimonialVideo(videoUrl)}
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

