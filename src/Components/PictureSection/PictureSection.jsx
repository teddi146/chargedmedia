import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pictureSection.css';

const PictureSection = ({ pictureData }) => {
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
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
        {pictureData.map((image, i) => {
          return (
            <SwiperSlide key={`Slide-${image.title}-${i}`}>
              <section className='picture-section'>
                <div className='hero-container'>
                  <div className='box-ps'>
                    <div className='slide-img-ps'>
                      <img src={image.image} alt={image.title} />
                      <div className={`content`} key={image.title}>
                        <h1>
                          {image.title}
                          <br></br>
                          <span>{image.subtitle}</span>
                        </h1>
                        <p>{image.detail}</p>

                        <button href='#'>View On Instagram</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
        <div ref={prevArrowRef}>
          <BsChevronLeft className='left-arrow' />
        </div>
        <div ref={nextArrowRef}>
          <BsChevronRight className='right-arrow' />
        </div>
        <div className='swiper-pagination'>
          <span className=' swiper-pagination-bullet'></span>
        </div>
      </Swiper>
    </>
  );
};

export default PictureSection;

