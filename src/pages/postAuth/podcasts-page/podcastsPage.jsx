import React, { useState, useContext, useEffect } from 'react'
import PodcastPageCard from './card'
import { Row, Col, Space, Spin } from 'antd'
import CourseContext from '../../../context/course-context/CourseContext'
import './styles.scss'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


const PodcastPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0)
  const [allPodcastEpisodes, setAllPodcastEpisodes] = useState([])
  const [musicPlayerMode, setMusicPlayerMode] = useState("mini")

  const { getAllThePodcasts } = useContext(CourseContext)

  const onGetAllPodcastEpisodes = async() => {
    const returnedData = await getAllThePodcasts()    

    const allPodcastEpisodeArray = []
      returnedData.data?.forEach(episode => {
        const objectForThePlayer = {
          name: episode.podcastTitle,
          musicSrc: episode.audioUrl,
          singer: episode.podcastAuthors,
          cover: episode.podcastImage
        }
        allPodcastEpisodeArray.push(objectForThePlayer)
      });
      setAllPodcastEpisodes(allPodcastEpisodeArray)
      console.log(allPodcastEpisodeArray)
  }

  useEffect(() => {
    onGetAllPodcastEpisodes().finally(() => {
      setIsLoading(false)
    })
  }, [])

  const onToggleMode = () => {
    musicPlayerMode == "full" ? setMusicPlayerMode("mini") : setMusicPlayerMode("full")
    console.log("Hello world!")
  }

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
                allPodcastEpisodes.map((podcast, index) => (
                  <Col sm={24} lg={10}>
                    <PodcastPageCard
                      title={podcast.name}
                      image={podcast.cover}
                      speakers={podcast.singer}
                      audioIndex={index}
                      setCurrentAudioIndex={setCurrentAudioIndex}
                      setMusicPlayerMode={setMusicPlayerMode}
                    />
                  </Col>
                ))
              }
            </Row>
            <div className="current-audio-container">
              <ReactJkMusicPlayer
                preload={false}
                remember={true}
                mode={musicPlayerMode}
                audioLists={allPodcastEpisodes}
                playIndex={currentAudioIndex}
                autoPlay={false}
                toggleMode={true}
                defaultPosition={{bottom: 100, right: 120}}
                showDownload={false}
                showPlayMode={true}
                spaceBar={true}
                remove={false}
                glassBg={true}
                showMiniProcessBar={true}
                extendsContent={<button className="custom-minimize-button-on-player" style={{ backgroundColor: "#F14A03", border: "none", padding: "2%", borderRadius: "20px", cursor: "pointer"}} onClick={onToggleMode}>Mini</button>}
              >
              </ReactJkMusicPlayer>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PodcastPage
