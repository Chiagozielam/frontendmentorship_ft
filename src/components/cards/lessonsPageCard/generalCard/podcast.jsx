import React from 'react'
import './styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight
  } from "@fortawesome/free-solid-svg-icons";

const PodcatsCard = ({ heading, description, bgcolor, link}) => {
  return (
        <a href={link}>
          <div className="podcast-card" style={{ backgroundColor: `${bgcolor}`}}>
            <p className="heading">{heading}</p>
            <p className="description">{description}</p>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </div>
        </a> 
     );
}
 
export default PodcatsCard;