import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
  
const SocialCard = ({ description, link }) => {
  return (
      <Link href={link}>
        <div className="social-card">
          <p className="description">{description} <FontAwesomeIcon icon={faArrowCircleRight} /> </p>
          
        </div>
      </Link> 
     );
}
 
export default SocialCard;