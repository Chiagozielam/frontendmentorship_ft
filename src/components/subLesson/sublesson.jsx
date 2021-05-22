import './styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";

const SubLesson = ({ subLesson, index }) => {


  return (
          <div style={{marginLeft: 'auto', width: '90%'}}>
            <div className="details">
              <div className="check-mark">
                {subLesson.completed && <FontAwesomeIcon icon={faCheck} style={{width: '100%'}} /> }
              </div>
              <div className="lesson-details">
                <span className="lesson-index">{index += 1}.</span>
                <span className="lesson-title">{subLesson?.lessonDetailsArray[0]?.lessonTitle}</span>
              </div>
            </div>
            <div className="video-details">
              <span> <FontAwesomeIcon className="play-icon" icon={faPlayCircle} /> </span>
              <span className="lesson-duration">{subLesson?.lessonDetailsArray[0]?.lessonDuration} mins</span>
            </div>
          </div>
    
   );
}
 
export default SubLesson;