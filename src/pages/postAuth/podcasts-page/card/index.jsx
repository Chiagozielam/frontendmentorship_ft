import React from 'react'
import ButtonWithIcon from '../../../../components/buttonWithIcon/ButtonWithIcon'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'antd'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PodcastPageCard = ({title, image, speakers, setCurrentAudio, audioFile}) => {
  const onPlayAudio = () => {
    setCurrentAudio(null)
    setCurrentAudio(audioFile)
  }
  return (
    <div className="podcast-page-card-container">
      <Row className="podcast-page-card-flex">
        <Col sm={4} md={4} lg={4}>
          <div className="image-container">
            <img src={image} alt="" />
          </div>
        </Col>
        <Col sm={16} md={16} lg={16}>
          <div className="rest-of-the-card-body">
            <p className="title">{title}</p>
            <p className="speaker">{speakers}</p>
          </div>
        </Col>
        <Col sm={4} md={16} lg={4}>
          <div className="play-icon-container">
            <FontAwesomeIcon onClick={onPlayAudio} icon={faPlayCircle} style={{ fontSize: "24px", color: "#F14A03", cursor: "pointer"}} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PodcastPageCard
