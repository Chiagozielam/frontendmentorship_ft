import React from 'react'
import './styles.scss'
import { Row, Col } from 'antd'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

const LessonFolder = ({ lessonFolder }) => {
  return (
    <div className={`lesson-folder ${lessonFolder.completed ? 'lesson-completed':'lesson-incompleted'}`}>
      <Row align="middle">
        <Col span={6}>
          <img src={lessonFolder.folderImage} alt=""/>
        </Col>
        <Col span={10} className="folder-details">
          <p className="folder-title">{lessonFolder.folderTitle}</p>
          <a href="#" className="folder-link">View lessons <FontAwesomeIcon icon={faArrowCircleRight} className="link-icon" color="#F14A03" /></a>
        </Col>
        <Col offset={3} span={1} value={10}>
          {
            lessonFolder.completed ? <FontAwesomeIcon icon={faCheck} className="check-mark" /> : ''
          }
        </Col>
      </Row>
    </div>
  )
}

export default LessonFolder
