import React from 'react'
import { string ,func } from 'prop-types'
import "./styles.scss"

const CurriculumCard = ({ title, onClick }) => {
  return (
    <div
      className="curriculum-card-container"
      onClick={onClick}
    >
      <p className="title">Introduction to the web</p>

      <p className="view-details">View details</p>
    </div>
  )
}

CurriculumCard.propTypes = {
  title: string.isRequired,
  onClick: func.isRequired
}

export default CurriculumCard
