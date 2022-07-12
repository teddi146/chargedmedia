import React, { useState, useEffect, useRef } from 'react';

import './heroSection.css';
import HeroVideo from '../HeroVideo/HeroVideo';
import SliderNav from '../SliderNav/SliderNav';

const HeroSection = ({ heroData, Component }) => {
  const [index, setIndex] = useState(0);
  const slides = document.querySelectorAll('.video-slide');
  const delay = 5000;
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const videos = document.querySelectorAll('.video-slide');

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePause = async (video) => {
    try {
      await video.pause();
      console.log('paused');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlay = async (video) => {
    try {
      await video.play();
      console.log('playing');
    } catch (err) {
      console.log(err);
      await video.pause();
    }
  };

  const togglePlay = () => {
    videos.forEach((video, i) => {
      if (index === i) {
        handlePlay(video);
      } else if (index - 1 < index) {
        handlePause(videos[index - 1]);
      }

      // if (index === i) {
      //   handlePlay(video);
      // } else if (videos.length - 1) {
      //   try {
      //     videos[index - 1].pause();
      //   } catch (err) {
      //     console.log(err);
      //     console.log('paused');
      //   }
      // }
    });
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
      // togglePlay(),
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
                className={`content-container ${index === i ? 'active' : ''}`}
                key={video.title}
              >
                {/* <HeroVideo
                  i={i}
                  index={index}
                  video={video}
                  videoRef={videoRef}
                  className='hero-video'
                /> */}
                <div className='img-wrapper'>
                  <video
                  id={i}
                  className={`video-slide ${index === i ? 'active' : ''}`}
                  src={video.video}
                  type='video/mp4'
                  // autoPlay
                  controls
                  muted
                  loop
                  ref={videoRef}
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

