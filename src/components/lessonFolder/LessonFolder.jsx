import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
// import { LESSON_FOLDER_PAGE } from './routes';
import GeneralContext from "../../context/generalContext/GeneralContext"
import { LazyLoadImage } from 'react-lazy-load-image-component';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowCircleRight,
  faLock
} from "@fortawesome/free-solid-svg-icons";

const LessonFolder = ({ lessonFolder }) => {
  const [warning, setWarning] = useState(false)
  const { push } = useHistory()
  const { generalState: { user }, setPaymentModalOpened, paymentModalOpened } = useContext(GeneralContext) 

  const showWarning = () => {
    setWarning(true)
    
    setTimeout(() => {
      setWarning(false)
    }, 2000);
  }

  const togglePaymentModal = () => {
    setPaymentModalOpened(!paymentModalOpened)
  }
  const onClickOnFolder = () => {
    if (lessonFolder.locked) {
      return
    }
    push({
      pathname: `/dashboard/lessonfolder/${lessonFolder._id}`,
      state: {lessonFolder}
    })
  }

  return (
    <div
    style={{ cursor: "pointer"}}
      onClick={onClickOnFolder}
    >
       
      <div className={`lesson-folder 
          ${lessonFolder.locked ? 'lesson-folder-locked' : ''}  
          ${lessonFolder.completed ? 'lesson-completed' : 'lesson-incompleted'}`}
          onClick={() => {
            if(!user?.paid){
              togglePaymentModal()
              return
            }
            showWarning()
          }}
          >
        <div className="lesson-folder-locked-container">
          { warning && <h3 className={`warning-text ${warning === true ? 'animate-text-in': '' }`}>Sorry, you have to finish previous folder first</h3>}
          { !(warning) && <div className="lock-icon-container"><FontAwesomeIcon icon={faLock} className="lock-icon" /></div>}
        </div>
          <Row align="middle">
            <Col span={6}>
              <LazyLoadImage
                alt="lesson folder"
                className="folder-image"
                src={lessonFolder.folderDetails[0].folderImage} // use normal <img> attributes as props
              />
            </Col>
            <Col span={10} className="folder-details">
              <p className="folder-title">{lessonFolder.folderDetails[0].folderTitle}</p>
              <Link to={`/dashboard/lessonfolder/${lessonFolder.id}`} className="folder-link">View lessons <FontAwesomeIcon icon={faArrowCircleRight} className="link-icon" color="#F14A03" /></Link>
            </Col>
            <Col offset={3} span={1} value={10}>
              {
                lessonFolder.completed ? <FontAwesomeIcon icon={faCheck} className="check-mark" /> : ''
              }
            </Col>
          </Row>
      </div>
    
    </div>
  )
}

export default LessonFolder
