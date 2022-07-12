import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import LazyLoad from 'react-lazyload';

import { promoData } from './promoData';
import SliderNav from '../SliderNav/SliderNav';
import './promoSection.css';
import { IconContext } from 'react-icons/lib';

const PromoSection = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const slides = document.querySelectorAll('.promo-slide');
  const delay = 5000;
  const length = promoData.length;

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

  if (!Array.isArray(promoData) || promoData.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='promo-section'>
        <IconContext.Provider value={{ color: '#81f7b6' }}>
          <BsChevronLeft className='left-arrow' onClick={prevSlide} />
          <BsChevronRight className='right-arrow' onClick={nextSlide} />
        </IconContext.Provider>
        <div className='promo-hero'>
          {' '}
          {promoData.map((image, i) => {
            return (
              <div
                className={`content-container  ${index === i ? 'active' : ''}`}
                key={i}
              >
                <div className='img-wrapper'>
                  <img
                    id='promoImg'
                    className={`promo-slide ${index === i ? 'active' : ''}`}
                    src={image.image}
                    alt={image.title}
                  />
                  <div
                    className={`promo-content ${index === i ? 'active' : ''}`}
                    key={image.title}
                  >
                    <h1 className='promo-title'>{image.title}</h1>
                    <h2 className='promo-subtitle'>{image.subtitle}</h2>
                    <h1 className='promo-price'>R{image.price}</h1>
                    <button className='add-to-cart' style={{ width: '200px' }}>
                      Add To Cart
                    </button>
                    <ul>
                      <li className='promo-item' key={`item ${i}`}>
                        {image.detail1}
                      </li>
                      <li className='promo-item' key={`item ${i + 1}`}>
                        {image.detail2}
                      </li>
                      <li className='promo-item' key={`item ${i + 2}`}>
                        {image.detail3}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <SliderNav data={promoData} index={index} setIndex={setIndex} />
      </section>
    </>
  );
};

export default PromoSection;
