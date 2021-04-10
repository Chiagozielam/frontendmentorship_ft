import React from 'react'
import './styles.scss'
import { Row, Col, } from 'antd'

const LessonFolder = ({ lessonFolder }) => {
  return (
    <div className={`lesson-folder ${lessonFolder.completed ? 'lessonCompleted':'lessonIncompleted'}`}>
      <Row>
        <Col span={6}>
          <img src={lessonFolder.folderImage} alt=""/>
        </Col>
        <Col span={10} className="folder-details">
          <p className="folder-title">{lessonFolder.folderTitle}</p>
          <a href="#" className="folder-link">View Lessons</a>
        </Col>
        <Col span={4}>
          eeee
        </Col>
      </Row>
    </div>
  )
}

export default LessonFolder
