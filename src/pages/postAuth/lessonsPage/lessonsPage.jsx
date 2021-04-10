import React from 'react'
import { withRouter } from 'react-router'
import { Row, Col, } from 'antd'
import './styles.scss'
import LessonFolders from './lessonFolders'
import Acheivements from './achievements'

const LessonsPage = () => {
  return (
    <div className="lessons-page-container">
      <Row>
        <Col span={14}>
           <LessonFolders />
        </Col>
        <Col span={10}>
          <Acheivements />
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(LessonsPage)
