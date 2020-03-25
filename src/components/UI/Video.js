import React from 'react';

const Video = ({url}) => {
  return(
    <div className="videoContainer">
      <video className="videoParallax" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={url} type="video/webm"/>
      </video>
    </div>
  )
}

export default Video;