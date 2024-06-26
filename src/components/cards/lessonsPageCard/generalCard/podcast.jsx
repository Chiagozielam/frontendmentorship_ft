import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { string, func } from 'prop-types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight
  } from "@fortawesome/free-solid-svg-icons";

const PodcatsCard = ({ heading, description, bgcolor, link, filter, boxShadow, onClick}) => {
  return (
        <div onClick={onClick} style={{ cursor: "pointer"}}>
          <div className="podcast-card" style={{ backgroundColor: `${bgcolor}`, filter: `${filter}`, boxShadow: `${boxShadow}`}}>
            <div className="podcast-details">
              <p className="heading">{heading}</p>
              <p className="description">{description}</p>
              <FontAwesomeIcon icon={faArrowCircleRight} />   
            </div>
          </div>
        </div> 
     );
}

PodcatsCard.propTypes = {
  heading: string,
  description: string,
  bgcolor: string,
  link: string,
  filter: string,
  boxShadow: string,
  onClick: func 
}
 
export default PodcatsCard;