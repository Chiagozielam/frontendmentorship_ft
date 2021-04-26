import React from 'react'
import { withRouter } from 'react-router'
import { Row, Col, } from 'antd'
import './styles.scss'
import LessonFolders from './lessonFolders'
import Acheivements from './achievements'
import PodcastCard from '../../../components/cards/lessonsPageCard/generalCard/podcast'
import SocialCard from '../../../components/cards/lessonsPageCard/socialCard/socialCard'
import Sub from '../../../components/subLesson/sublesson';
import TabsComponent from '../../../components/tabs/Tabs'


const bonusCardDescription = 'Access all the bonus crash courses by clicking on this card'
const socialCardDescription = 'Join the community on telegram'

const lessonPageTabs = [
  {
    tabName: 'Lesson Folders',
    tabContent: <LessonFolders />,
    tabIndex: 1
  },
  {
    tabName: 'Acheivements',
    tabContent: <Acheivements />,
    tabIndex: 2
  },
  {
    tabName: 'Bonuses',
    tabContent: <div style={{ padding: '5%', paddingTop: '1%' }}>
                  <PodcastCard heading="Bonuses" description={bonusCardDescription} bgcolor="#141D26" />
                  <PodcastCard heading="Prodcast" description={bonusCardDescription} bgcolor="#F14A03" />
                  <SocialCard description={socialCardDescription} />
                  <SocialCard description={socialCardDescription} />
                  <SocialCard description={socialCardDescription} />
                </div>,
    tabIndex: 3
  }
]

const LessonsPage = () => {

  return (
    <div className="lessons-page-container">
      <div className="lesson-page-mobile">
        <TabsComponent tabBarColor="white" tabItems={lessonPageTabs} />
      </div>
      
      <div className="lesson-page-desktop">
        <Row justify="space-between">
          <Col sm={24} lg={14}>
            <LessonFolders />
          </Col>
          <Col sm={24} lg={8}>
            <Acheivements />
          </Col>
        </Row>
        <Row justify="space-between" className="cards">
          <Col sm={24} lg={15}>
            <Row justify="space-between">
              <Col span={11}>
                <PodcastCard heading="Bonuses" description={bonusCardDescription} bgcolor="#141D26" />
              </Col>
              <Col  span={11}>
                <PodcastCard heading="Prodcast" description={bonusCardDescription} bgcolor="#F14A03" />
              </Col>
            </Row>
          </Col>
          <Col sm={24} lg={7}>
            <SocialCard description={socialCardDescription} />
            <SocialCard description={socialCardDescription} />
            <SocialCard description={socialCardDescription} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default withRouter(LessonsPage)
