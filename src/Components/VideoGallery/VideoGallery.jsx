import React, { useState, useRef } from 'react';
import './videoGallery.css';

const VideoGallery = ({ videoData }) => {
  const [mainVideo, setMainVideo] = useState(videoData[0].video);
  const [title, setTitle] = useState(videoData[0].title);

  const videosRef = useRef(null);

  const handleClick = (e) => {
    const videos = Array.from(videosRef.current.getElementsByClassName('vid'));

    videos.forEach((vid) => vid.classList.remove('active'));

    e.target.classList.add('active');

    if (e.target.classList.contains('active')) {
      let src = e.target.children[0].getAttribute('src');
      setMainVideo(src);
      setTitle(() => {
        return e.target.children[1].innerText;
      });
      document.getElementById('video-gallery').scrollIntoView();
    }
  };
  return (
    <section id='video-gallery' className='video-gallery'>
      <h3 className='heading'>Video Gallery</h3>
      <div className='container'>
        <div className='main-video'>
          <div className='video'>
            <video src={mainVideo} controls muted autoPlay></video>
            <h3 className='title'>{title}</h3>
          </div>
        </div>
        <div className='video-list' ref={videosRef}>
          {videoData.map((video, i) => {
            return (
              <div
                className={`vid ${i === 0 ? 'active' : ''}`}
                onClick={handleClick}
                key={'video' + i}
              >
                <video src={video.video} title={video.title} muted></video>
                <h3 className='title'>{`${video.title}`}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
