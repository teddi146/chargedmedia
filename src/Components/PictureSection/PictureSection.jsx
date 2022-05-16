import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

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
        {pictureData.map((image, i) => {
          return (
            <React.Fragment key={image.title}>
              <img
                id='pictureSectionImage'
                className={`picture-slide ${index === i ? 'active' : ''}`}
                src={image.image}
                alt={image.title}
              />
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
            </React.Fragment>
          );
        })}
        <div className='slider-navigation'>
          {pictureData.map((_, i) => {
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

export default PictureSection;
