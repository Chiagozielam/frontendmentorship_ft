import './styles.scss'
import GeneralButton from '../../GeneralButton'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';

const InstructorCard = ({ instructor, cardColor = 'white' }) => {
  

  let [size, setSize] = useState(window.innerWidth)
    

  useEffect(() => {
      window.addEventListener('resize', checksize)

      return () => {
          window.removeEventListener('resize', checksize)
      }
  })
  function checksize() {
       setSize(window.innerWidth)

  }


  return (
    <div style={{backgroundColor: `${cardColor}`}} className="instructor-card">
      <h4 className="instructor-header">Instructor</h4>

      <div className="instructor-details">
        <div className="instructor-image">
          <img src={instructor.image} alt=""/>
        </div>
        <div className="instructor-name">
          <h3>{instructor.fullname}</h3>
          <GeneralButton buttonText="Ask A Question" borderRadius="5px" height={size <= 425 ? '26px' : '39px'} fontSize={size <= 425 ? '10px' : '14px'} width={size <= 425 ? '121px' : '172px' }/>
        </div>
        <div className="instructor-social-handle">
          <a href={instructor.twitter}>
          </a>
          <a href={instructor.linkdin}>
            <FontAwesomeIcon icon={faLinkedin} className="linkdin" />
          </a>
        </div>
      </div>
    </div>
   );
}
 
export default InstructorCard;