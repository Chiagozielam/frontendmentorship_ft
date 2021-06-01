import React from 'react'
import './styles.scss'

const VideoContent = () => {
  return (
    <div className="entire-video-section">
      <p className="heading">
        20 minutes consultation on getting started with web development
      </p>
      <div className="video-container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vs-Zm5Cl0Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default VideoContent
