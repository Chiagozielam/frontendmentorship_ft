import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight
  } from "@fortawesome/free-solid-svg-icons";

const PodcatsCard = ({ heading, description, bgcolor, link}) => {
  return (
        <Link to={link}>
          <div className="podcast-card" style={{ backgroundColor: `${bgcolor}`}}>
            <div className="podcast-details">
              <p className="heading">{heading}</p>
              <p className="description">{description}</p>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>
        </Link> 
     );
}
 
export default PodcatsCard;