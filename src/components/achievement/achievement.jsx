import React from 'react'
import './styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom'

const Achievement = ({ achievement }) => {

  return (
  
    <div>
      {
        
        achievement.locked ?
          <Link to={achievement.link}>
            <div className="achievement achievement-unlocked">
              <div className="achievement-details">
                <div className="icon">
                  <FontAwesomeIcon icon={faTrophy} color="#F14A03" />
                </div>
                
                <p className="achievement-tItle">{achievement.achievementTItle}</p>
              </div>
            </div>
          </Link>
          :
          <div className="achievement achievement-locked"></div>
      }
    </div>
      
     
     );
}
 
export default Achievement;