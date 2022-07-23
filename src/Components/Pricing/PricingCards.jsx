import React, { useRef } from 'react';
import { BsChevronRight, BsChevronLeft, BsFilter } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// eslint-disable-next-line
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pricing.css';

const PricingCards = ({ servicesData }) => {
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `
          <span class='${className}'></span>`;
          },
          autoplay: { delay: 2500, disableOnInteraction: false },
        }}
        breakpoints={{
          480: {
            width: 480,
            // slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            width: 640,
            // slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            width: 768,
            // slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            width: 1024,
            // slidesPerGroup: 2,
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1440: {
            width: 1440,
            // slidesPerGroup: 2,
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        navigation={{ prevEl: prevArrowRef, nextEl: nextArrowRef }}
        modules={[Pagination, Navigation]}
        className='pricing-swiper'
        tag='section'
        wrapperTag='ul'
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevArrowRef.current;
          swiper.params.navigation.nextEl = nextArrowRef.current;
        }}
      >
        {servicesData.map((slide, i) => {
          return (
            <SwiperSlide key={`Slide-${i}`}>
              <div className='pricing-cards'>
                <div className={`box `}>
                  <div className={`slide-img `}>
                    <img src={slide.image} alt='' />

                    <div className='overlay'>
                      <a href='#' className='add-cart-btn'>
                        Add To Cart
                      </a>
                    </div>
                  </div>

                  <div className={`pricing-detail-box `}>
                    <div className='pricing-type'>
                      <a href='#'>1hr Photoshoot</a>
                      <span> On-Location</span>
                    </div>

                    <a href='#' className='price'>
                      R750
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div ref={prevArrowRef}>
          <IconContext.Provider value={{ color: '#81f7b6' }}>
            <BsChevronLeft className='left-arrow' />
          </IconContext.Provider>
        </div>
        <div ref={nextArrowRef}>
          <IconContext.Provider value={{ color: '#81f7b6' }}>
            <BsChevronRight className='right-arrow' />
          </IconContext.Provider>
        </div>
        <div className='swiper-pagination'>
          <span className=' swiper-pagination-bullet'></span>
        </div>
      </Swiper>
    </>

    // <section className='pricing-cards'>
    //   <div className={`box `}>
    //     <div className={`slide-img `}>
    //       <img src={servicesData[0].image} alt='' />
    //       <div className='overlay'>
    //         <a href='#' className='add-cart-btn'>
    //           Add To Cart
    //         </a>
    //       </div>
    //     </div>
    //     <div className={`detail-box `}>
    //       <div className='type'>
    //         <a href='#'>1hr Photoshoot</a>
    //         <span> On-Location</span>
    //       </div>
    //       <a href='#' className='price'>
    //         R750
    //       </a>
    //     </div>
    //   </div>
    //   <div className={`box `}>
    //     <div className={`slide-img `}>
    //       <img src={servicesData[0].image} alt='' />
    //       <div className='overlay'>
    //         <a href='#' className='add-cart-btn'>
    //           Add To Cart
    //         </a>
    //       </div>
    //     </div>
    //     <div className={`detail-box `}>
    //       <div className='type'>
    //         <a href='#'>1hr Photoshoot</a>
    //         <span> On-Location</span>
    //       </div>
    //       <a href='#' className='price'>
    //         R750
    //       </a>
    //     </div>
    //   </div>
    //   <div className={`box `}>
    //     <div className={`slide-img `}>
    //       <img src={servicesData[0].image} alt='' />
    //       <div className='overlay'>
    //         <a href='#' className='add-cart-btn'>
    //           Add To Cart
    //         </a>
    //       </div>
    //     </div>
    //     <div className={`detail-box `}>
    //       <div className='type'>
    //         <a href='#'>1hr Photoshoot</a>
    //         <span> On-Location</span>
    //       </div>
    //       <a href='#' className='price'>
    //         R750
    //       </a>
    //     </div>
    //   </div>

    //   <div className={`box`}>
    //     <div className={`slide-img `}>
    //       <img src={servicesData[1].image} alt='' />
    //       <div className='overlay'>
    //         <a href='#' className='add-cart-btn'>
    //           Add To Cart
    //         </a>
    //       </div>
    //     </div>
    //     <div className={`detail-box `}>
    //       <div className='type'>
    //         <a href='#'>1hr Photoshoot</a>
    //         <span> On-Location</span>
    //       </div>
    //       <a href='#' className='price'>
    //         R750
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};

export default PricingCards;

