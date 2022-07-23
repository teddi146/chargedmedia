import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './promoSection.css';

import { promoData } from './promoData';
import SliderNav from '../SliderNav/SliderNav';

const PromoSection = () => {
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);
  return (
    <section className='promo-section'>
      <>
        <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `
          <span class='${className}'></span>`;
            },
          }}
          // autoplay={{ delay: 2500 }}
          navigation={{ prevEl: prevArrowRef, nextEl: nextArrowRef }}
          modules={[Autoplay, Pagination, Navigation]}
          className='swiper'
          tag='section'
          wrapperTag='ul'
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevArrowRef.current;
            swiper.params.navigation.nextEl = nextArrowRef.current;
          }}
        >
          {promoData.map((image, i) => {
            return <SwiperSlide key={`Slide-${i}`}></SwiperSlide>;
          })}

          <div ref={prevArrowRef}>
            <IconContext.Provider value=''>
              <BsChevronLeft className='left-arrow' />
            </IconContext.Provider>
          </div>
          <div ref={nextArrowRef}>
            <IconContext.Provider value=''>
              <BsChevronRight className='right-arrow' />
            </IconContext.Provider>
          </div>
          <div className='swiper-pagination'>
            <span className=' swiper-pagination-bullet'></span>
          </div>
        </Swiper>
        {/* <section className='promo-section'>
        <div className='promo-hero'>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
      </>
    </section>
  );
};

export default PromoSection;
