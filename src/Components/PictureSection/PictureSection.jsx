import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import LazyLoad from 'react-lazyload';

import SliderNav from '../SliderNav/SliderNav';
import './pictureSection.css';

const PictureSection = ({ pictureData }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = document.querySelectorAll('.picture-slide');
  const delay = 5000;
  const length = pictureData.length;

  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  const prevSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
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

    return () => {};
  }, [index]);

  if (!Array.isArray(pictureData) || pictureData.length <= 0) {
    return null;
  }
  return (
    <>
      <section className='picture-section'>
        <BsChevronLeft className='left-arrow' onClick={prevSlide} />
        <BsChevronRight className='right-arrow' onClick={nextSlide} />
        <div className='hero-container'>
          {pictureData.map((image, i) => {
            return (
              <div key={image.title}>
                <LazyLoad
                  height={'100%'}
                  // unmountIfInvisible={true}
                  debounce={true}
                  throttle
                >
                  <img
                    id='pictureSectionImage'
                    className={`picture-slide ${index === i ? 'active' : ''}`}
                    src={image.image}
                    alt={image.title}
                  />
                </LazyLoad>

                <div
                  className={`content ${index === i ? 'active' : ''}`}
                  key={image.title}
                >
                  <h1>
                    {image.title}
                    <br></br>
                    <span>{image.subtitle}</span>
                  </h1>
                  <p>{image.detail}</p>
                  {/* <a href='#'>Read More</a> */}
                  <button href='#'>View On Instagram</button>
                </div>
              </div>
            );
          })}
          <div className='shade'></div>
        </div>
        <SliderNav data={pictureData} index={index} setIndex={setIndex} />
      </section>
    </>
  );
};

export default PictureSection;


