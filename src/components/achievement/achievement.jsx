import React from 'react'
import './styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

const Achievement = ({ achievement }) => {

  return (
  
    <div>
      {
        
        achievement.locked ?
          <a href={achievement.link}>
            <div className="achievement achievement-unlocked">
              <div className="achievement-details">
                <div className="icon">
                  <FontAwesomeIcon icon={faTrophy} color="#F14A03" />
                </div>
                
                <p className="achievement-tItle">{achievement.achievementTItle}</p>
              </div>
            </div>
          </a>
          :
          <div className="achievement achievement-locked"></div>
      }
    </div>
      
     
     );
}
 
export default Achievement;