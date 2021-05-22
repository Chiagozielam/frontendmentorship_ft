import React, { useEffect, useContext, useState } from 'react'
import { withRouter, useHistory } from 'react-router'
import { Row, Col, } from 'antd'
import './styles.scss'
import LessonFolders from './lessonFolders'
import Acheivements from './achievements'
import PodcastCard from '../../../components/cards/lessonsPageCard/generalCard/podcast'
import SocialCard from '../../../components/cards/lessonsPageCard/socialCard/socialCard'
import Sub from '../../../components/subLesson/sublesson';
import TabsComponent from '../../../components/tabs/Tabs'
import { BONUSUS_PAGE, CONGRATULATION_PAGE, LOGIN_PAGE, PODCASTS_PAGE,  } from '../../../routes'
import CourseContext from '../../../context/course-context/CourseContext'


const bonusCardDescription = 'Access all the bonus crash courses by clicking on this card'
const socialCardDescription = 'Join the community on telegram'


const LessonsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { push } = useHistory()
  const checkStatus = () => {
    const user = localStorage.getItem("user")
    const userToken = localStorage.getItem("user-token")
    if(!user && !userToken){
      push(LOGIN_PAGE)
    }
    if(user && !userToken){
      push(CONGRATULATION_PAGE)
    }
    return
  }
  useEffect(() => {
    checkStatus()
  }, [])
  useEffect(() => {
    getAllUserLessonFolders().finally(() => {
      setIsLoading(false)
    })
  }, [])

  const { getAllUserLessonFolders, userLessonFolders } = useContext(CourseContext)


  const lessonPageTabs = [
    {
      tabName: 'Lesson Folders',
      tabContent: <LessonFolders isLoading={isLoading} />,
      tabIndex: 1
    },
    {
      tabName: 'Bonuses',
      tabContent: <div style={{ marginLeft: "5%" }}>
                    <PodcastCard
                      heading="Bonuses"
                      description={bonusCardDescription}
                      bgcolor="#141D26" boxShadow="0px 5px 15px rgba(241, 74, 3, 0.66)"
                      onClick={() => push(BONUSUS_PAGE)}
                    />
                    <PodcastCard
                      heading="Prodcast"
                      description={bonusCardDescription}
                      bgcolor="#F14A03"
                      boxShadow="0px 5px 15px rgba(32, 39, 47, 0.54)"
                      onClick={() => push(PODCASTS_PAGE)}
                    />
                    <SocialCard description={socialCardDescription} />
                    <SocialCard description={socialCardDescription} />
                  </div>,
      tabIndex: 3
    }
  ]



  return (
    <div className="lessons-page-container">
      <div className="lesson-page-mobile">
        <TabsComponent tabBarColor="white" tabItems={lessonPageTabs} />
      </div>
      
      <div className="lesson-page-desktop">
        <Row justify="space-between">
          <Col sm={24} lg={14}>
            <LessonFolders isLoading={isLoading} />
          </Col>
          <Col sm={24} lg={8}>
            <h1 className="bonuses-header">Bonuses</h1>
            <PodcastCard
              heading="Bonuses" description={bonusCardDescription}
              bgcolor="#141D26" boxShadow="0px 5px 15px rgba(32, 39, 47, 0.54)"
              onClick={() => push(BONUSUS_PAGE)}
            />
            <PodcastCard
              heading="Prodcast"
              description={bonusCardDescription}
              bgcolor="#F14A03" boxShadow="0px 5px 15px rgba(241, 74, 3, 0.66)"
              onClick={() => push(PODCASTS_PAGE)}
            />
            <SocialCard description={socialCardDescription} />
            <SocialCard description={socialCardDescription} />
          </Col>
          {/* <Col sm={24} lg={8}>
            <Acheivements />
          </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default withRouter(LessonsPage)
