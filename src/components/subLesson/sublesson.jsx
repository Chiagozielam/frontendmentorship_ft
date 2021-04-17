import './styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";

const SubLesson = ({ subLesson, index }) => {


  return (
          <div>
            <div className="details">
              <div className="check-mark">
                {subLesson.completed && <FontAwesomeIcon icon={faCheck} style={{width: '100%'}} /> }
              </div>
              <div className="lesson-details">
                <span className="lesson-index">{index += 1}.</span>
                <span className="lesson-title">{subLesson.title}</span>
              </div>
            </div>
            <div className="video-details">
              <span> <FontAwesomeIcon className="play-icon" icon={faPlayCircle} /> </span>
              <span className="lesson-duration">{subLesson.duration}</span>
            </div>
          </div>
    
   );
}
 
export default SubLesson;