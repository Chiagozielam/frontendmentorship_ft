import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
  
const SocialCard = ({ description, link }) => {
  return (
      <a href={link}>
        <div className="social-card">
          <p className="description">{description}</p>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </a> 
     );
}
 
export default SocialCard;