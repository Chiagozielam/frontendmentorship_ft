import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

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
 
export default PodcatsCard;