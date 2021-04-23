import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'
import { Row, Col, } from 'antd'
import BackButton from '../../../components/buttonWithIcon/ButtonWithIcon'
import Video from '../../../components/lessonVideoPlay/lessonVideoPlay'
import Description from '../../../components/lessonDescription/lessonDescription'
import Instructor from '../../../components/cards/instructorCard/instructorCard'
import SubLessonsFolders from './subLessonsFolder/subLessonsFolder'
import { lessonFoldersArray } from '../../postAuth/lessonsPage/data'

import {
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const FolderPageComponent = () => {

  const { id } = useParams()

  // stroe lesson description in a state (passed as prop to lesson description component)
  const [description, setDescription] = useState()

  // stroe video link in a state (passed as prop to lesson video component)
  const [videolink, setVideolink] = useState()

  // fuction called whwn description changes 
  const descriptionChanged = (e) => {
    setDescription(e)
  }

  // fuction called whwn video link changes
  const videoChanged = (e) => {
    setVideolink(e)
  }
 
  return (
    <div className="folder-page-container">
      <BackButton buttonText="back to home" bgcolor="white" textColor="black" icon={faArrowCircleLeft} iconColor="#F14A03" />
      <Row className="content">
        <Col span={13} className="video-lesson-details">
          
          {/* video component  */}
          <Video link={videolink} />
          
          {/* Lesson description  */}
          <div className="lesson-description-wrapper">
            <Description description={description} />
          </div>

          {/* instructor card */}
          <div className="insructor-card-wrapper">
            <Instructor instructor={lessonFoldersArray[`${id}`].instuctor} />
          </div>

        </Col>

        <Col offset={2} span={8}>
          {/* sub lesson folder component  */}
          <SubLessonsFolders lessonFolder={lessonFoldersArray[`${id}`]} changeDescription={descriptionChanged} changeVideo={videoChanged} />
        </Col>
      </Row>
    </div>
  );
}
 
export default FolderPageComponent;