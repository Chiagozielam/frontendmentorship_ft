import React from 'react'
import './styles.scss'

const TestimonialCard = ({ testimonialText, image, name, job }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card-text">
        {testimonialText}
      </p>
      <div className="person-container">
        <img src={image} alt="alumini's headshot"/>
        <div className="person-details">
          <p className="person-name">{name}</p>
          <p className="person-job">{job}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
