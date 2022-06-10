import React from "react";

import "./styles.scss";

const VideoContent = () => {
  const data = [];
  return (
    <div className="video_container">
      <div className="video_container">
        <div className="video_content">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Vs-Zm5Cl0Ws"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
