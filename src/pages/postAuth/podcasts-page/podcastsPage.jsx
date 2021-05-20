import React, { useState } from 'react'
import PodcastPageCard from './card'
import { Row, Col, Space } from 'antd'
import './styles.scss'

const PodcastPage = () => {
  const [currentAudio, setCurrentAudio] = useState(null)

  const podcastArray = [
    {
      podcastImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      podcastTitle: "My journey to becoming a tech millionaire",
      speakers: "Daniel and Chiziaruhoma",
      audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      podcastImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      podcastTitle: "My journey to becoming a tech millionaire",
      speakers: "Daniel and Chiziaruhoma",
      audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      podcastImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      podcastTitle: "My journey to becoming a tech millionaire",
      speakers: "Daniel and Chiziaruhoma",
      audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      podcastImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      podcastTitle: "My journey to becoming a tech millionaire",
      speakers: "Daniel and Chiziaruhoma",
      audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      podcastImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      podcastTitle: "My journey to becoming a tech millionaire",
      speakers: "Daniel and Chiziaruhoma",
      audioFile: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
    },
  ]
  return (
    <div className="bonuses-page">
      <h1>Fire Podcast Episodes</h1>
      <Row>
        {
          podcastArray.map(podcast => (
            <Col sm={24} lg={10}>
              <PodcastPageCard
                title={podcast.podcastTitle}
                image={podcast.podcastImage}
                speakers={podcast.speakers}
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

export default PodcastPage
