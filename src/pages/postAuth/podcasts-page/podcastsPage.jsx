import React, { useState, useContext, useEffect } from 'react'
import PodcastPageCard from './card'
import { Row, Col, Space, Spin } from 'antd'
import CourseContext from '../../../context/course-context/CourseContext'
import './styles.scss'
import axios from 'axios'

const PodcastPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentAudio, setCurrentAudio] = useState(null)
  const [allPodcastEpisodes, setAllPodcastEpisodes] = useState([])

  const { getAllThePodcasts } = useContext(CourseContext)

  const onGetAllPodcastEpisodes = async() => {
    const returnedData = await getAllThePodcasts()
    setAllPodcastEpisodes(returnedData.data)
  }

  useEffect(() => {
    onGetAllPodcastEpisodes().finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="bonuses-page">
      <h1>Fire Podcast Episodes</h1>
      {
        isLoading ? (
            <Spin tip="loading podcasts..." style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%"}} />
          ) : (
          <div>
            <Row>
              {
                allPodcastEpisodes.map(podcast => (
                  <Col sm={24} lg={10}>
                    <PodcastPageCard
                      title={podcast.podcastTitle}
                      image={podcast.podcastImage}
                      speakers={podcast.podcastAuthors}
                      setCurrentAudio={setCurrentAudio}
                      audioFile={podcast.audioFile}
                    />
                  </Col>
                ))
              }
            </Row>
            <div className="current-audio-container">
              {
                currentAudio ? (
                  <audio controls>
                    <source src={currentAudio} type="audio/ogg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : ''
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PodcastPage
