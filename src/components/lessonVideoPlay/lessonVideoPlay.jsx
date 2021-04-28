import { useEffect, useRef, useState } from "react"

import './styles.scss'

const LessonVideo = ({ link }) => {

  // use effect ran after link changes
  useEffect(() => {
    // load video again if link changes
    video.current.load()
  }, [link])

  // state for pause 
  const [paused, setPause] = useState(true)
  const [videoBtn, setVideoBtn] = useState(true)

  // ref for video tag
  const video = useRef()

  // function for pause and play of the video onclick of the btn
  const toggleVideo = () => {
    if (video.current.paused) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }

  // function for video is clicked and on play mode
  const play = () => {
    setPause(false)
  
    setTimeout(() => {
      setVideoBtn(false)
    }, 2500);
  }

  // function for video is clicked and on pause mode
  const pause = () => {
    setPause(true)
    setVideoBtn(true)
  }


  return (
    <div className="video-player-wrapper"  >
      <video ref={video} className="video" controls onPlay={play} onPause={pause}>
      <source src={link} type="video/mp4" /> 
      </video>
      { videoBtn && <div className="video-button-wrapper" onClick={toggleVideo}>
        <div
          className={`video-button
        ${paused === true ? '' : 'paused'}`}
        ></div>
      </div>}
    </div>
   );
}
 
export default LessonVideo;