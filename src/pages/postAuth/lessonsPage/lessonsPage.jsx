import React from 'react'
import { withRouter } from 'react-router'
import { Row, Col, } from 'antd'
import './styles.scss'
import LessonFolders from './lessonFolders'
import Acheivements from './achievements'
import PodcastCard from '../../../components/cards/lessonsPageCard/generalCard/podcast'
import SocialCard from '../../../components/cards/lessonsPageCard/socialCard/socialCard'



const LessonsPage = () => {

  let bonusCardDescription = 'Access all the bonus crash courses by clicking on this card'

  let socialCardDescription = 'Join the community on telegram'


  return (
    <div className="lessons-page-container">
      <Row>
        <Col span={14}>
           <LessonFolders />
        </Col>
        <Col offset={2} span={8}>
          <Acheivements />
        </Col>
      </Row>
      <Row justify="space-between" className="cards">
        <Col span={15}>
          <Row justify="space-between">
            <Col span={11}>
              <PodcastCard heading="Bonuses" description={bonusCardDescription} bgcolor="#141D26" />
            </Col>
            <Col span={11}>
              <PodcastCard heading="Prodcast" description={bonusCardDescription} bgcolor="#F14A03" />
            </Col>
          </Row>
        </Col>
        <Col span={7}>
          <SocialCard description={socialCardDescription} />
          <SocialCard description={socialCardDescription} />
          <SocialCard description={socialCardDescription} />
        </Col>
      </Row>
      <div>
        
      </div>
    </div>
  )
}

export default withRouter(LessonsPage)
