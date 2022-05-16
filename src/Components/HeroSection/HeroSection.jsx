<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';

import './heroSection.css';

const HeroSection = ({ heroData }) => {
  const [index, setIndex] = useState(0);
  const slides = document.querySelectorAll('.video-slide');
  const delay = 5000;
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePause = () => {
    if (videoRef.current.className === 'video-slide active') {
      videoRef.current.play();
      console.log('if-1');
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    // handlePause();

    return () => {};
  }, [index, slides.length]);

  return (
    <>
      <section className='home'>
        {heroData.map((video, i) => {
          return (
            <React.Fragment key={video.title}>
              <video
                id='headerVideo'
                className={`video-slide ${index === i ? 'active' : ''}`}
                src={video.video}
                autoPlay
                muted
                loop
                ref={videoRef}
                // onMouseOver={clearTimeout(delay)}
                // onMouseOut={resetTimeout()}
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
                {/* <a href='#'>Read More</a> */}
                <button href='#'>View On Youtube</button>
              </div>
            </React.Fragment>
          );
        })}

        <div className='slider-navigation'>
          {heroData.map((_, i) => {
            return (
              <div
                className={`nav-btn ${index === i ? 'active' : ''}`}
                key={_.title}
                onClick={() => {
                  setIndex(i);
                }}
              ></div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
=======
import React, { useState, useEffect, useRef } from 'react';

import './heroSection.css';

const HeroSection = ({ heroData }) => {
  const [index, setIndex] = useState(0);
  const slides = document.querySelectorAll('.video-slide');
  const delay = 5000;
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePause = () => {
    if (videoRef.current.className === 'video-slide active') {
      videoRef.current.play();
      console.log('if-1');
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );
    // handlePause();

    return () => {};
  }, [index, slides.length]);

  return (
    <>
      <section className='home'>
        {heroData.map((video, i) => {
          return (
            <React.Fragment key={video.title}>
              <video
                id='headerVideo'
                className={`video-slide ${index === i ? 'active' : ''}`}
                src={video.video}
                autoPlay
                muted
                loop
                ref={videoRef}
                // onMouseOver={clearTimeout(delay)}
                // onMouseOut={resetTimeout()}
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
                {/* <a href='#'>Read More</a> */}
                <button href='#'>View On Youtube</button>
              </div>
            </React.Fragment>
          );
        })}

        <div className='slider-navigation'>
          {heroData.map((_, i) => {
            return (
              <div
                className={`nav-btn ${index === i ? 'active' : ''}`}
                key={_.title}
                onClick={() => {
                  setIndex(i);
                }}
              ></div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
>>>>>>> 955c34a... chargedmedia commit
