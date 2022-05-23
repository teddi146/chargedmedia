import React, { useState, useEffect, useRef } from 'react';

import './heroSection.css';
import testvideo from '../../assets/video/Audio Czzle.mp4';
import HeroVideo from '../HeroVideo/HeroVideo';
import SliderNav from '../SliderNav/SliderNav';

const HeroSection = ({ heroData, Component }) => {
  const [index, setIndex] = useState(0);
  const slides = document.querySelectorAll('.video-slide');
  const delay = 5000;
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const video = document.getElementById(`${index}`);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePause = () => {
    videoRef.current.pause();
  };
  const handlePlay = () => {
    videoRef.current.play();
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      handlePlay();
      console.log('playig');
    } else {
      handlePause();
      console.log('piause');
    }

    // console.log(videoRef.current.id + '  ' + index);
    // // console.log(video.id);
    // if (index === index) {
    //   handlePlay();
    //   console.log('playing');
    // } else {
    //   handlePause();
    //   console.log('esle paused');
    // }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
      togglePlay(),
    );

    return () => {};
  }, [index, slides.length]);

  return (
    <>
      <section className='home'>
        <div className='hero-container'>
          {heroData.map((video, i) => {
            return (
              <div
                style={{ width: '100%;', height: '100%;' }}
                key={video.title}
              >
                <HeroVideo
                  i={i}
                  index={index}
                  video={video}
                  videoRef={videoRef}
                />

                <div
                  className={`content ${index === i ? 'active' : ''}`}
                  key={video.title}
                >
                  <h1>
                    {video.title}
                    <br></br>
                    <span>{video.subtitle}</span>
                  </h1>
                  <p>{video.detail}</p>

                  <button
                    style={{ width: '230px', height: 'fit-content' }}
                    href='#'
                  >
                    View On Youtube
                  </button>
                </div>
              </div>
            );
          })}
          {/* <div className='shade'></div> */}
        </div>
        <SliderNav data={heroData} index={index} setIndex={setIndex} />
      </section>
    </>
  );
};

export default HeroSection;

