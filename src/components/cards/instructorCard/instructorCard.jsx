import './styles.scss'
import GeneralButton from '../../GeneralButton'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const InstructorCard = ({ instructor}) => {
  return (
    <div className="instructor-card">
      <h4 className="instructor-header">Instructor</h4>

      <div className="instructor-details">
        <div className="instructor-image">
          <img src={instructor.image} alt=""/>
        </div>
        <div className="instructor-name">
          <h3>{instructor.name}</h3>
          <GeneralButton buttonText="Ask A Question" borderRadius="5px" width="172px" height="39px" fontSize="14px" />
        </div>
        <div className="instructor-social-handle">
          <Link to={instructor.twitter}>
            <FontAwesomeIcon icon={faTwitterSquare} className="twitter" />
          </Link>
          <Link to={instructor.linkdin}>
            <FontAwesomeIcon icon={faLinkedin} className="linkdin" />
          </Link>
        </div>
      </div>
    </div>
   );
}
 
export default InstructorCard;