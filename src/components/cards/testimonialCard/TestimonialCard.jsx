import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { object, func } from 'prop-types'

const TestimonialCard = ({ testimonial, setTestimonialVideoModalIsOpen, onChangeTestimonialVideo }) => {

  const onOpenTestimonialVideoModal = () => {
    setTestimonialVideoModalIsOpen(true)
    onChangeTestimonialVideo(testimonial?.videoUrl)
  }
  return (
    <div className="testimonial-card">
      <p className="testimonial-card-text">
        {testimonial?.testimonialText}
      </p>
      <div className="person-container">
        <img src={testimonial?.image} alt="alumini's headshot"/>
        <div className="person-details">
          <p className="person-name">{testimonial?.name}</p>
          <p className="person-job">{testimonial?.job}</p>
        </div>
      </div>
      {testimonial.videoUrl && (
        <div className="play-testimonial-video-container" onClick={onOpenTestimonialVideoModal}>
          <FontAwesomeIcon className="play-testimonial-video-icon" icon={faPlayCircle} />
          <p className="play-testimonial-video-text">Watch testimonial</p>
        </div>
      )}
    </div>
  )
}

TestimonialCard.propTypes = {
  testimonial: object,
  setTestimonialVideoModalIsOpen: func,
  onChangeTestimonialVideo: func
}

export default TestimonialCard
