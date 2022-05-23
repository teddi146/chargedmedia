import React from 'react';

const HeroVideo = ({ i, index, video, videoRef}) => {
  return (
    
      <video
        id={i}
        className={`video-slide ${index === i ? 'active' : ''}`}
        src={video.video}
        type='video/mp4'
        // autoPlay
        // controls
        muted
        loop
        ref={videoRef}
      />
  
  );
};

export default HeroVideo;
