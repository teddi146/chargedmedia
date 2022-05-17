import React, { useState, useEffect, useRef } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import { promoData } from './promoData';
import SliderNav from '../SliderNav/SliderNav';
import './promoSection.css';

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
    // <section className='promo-section'>
    //   <BsChevronLeft className='left-arrow' onClick={prevSlide} />
    //   <BsChevronRight className='right-arrow' onClick={nextSlide} />

    //   {promoData.map((data, i) => {
    //     return (
    //       <div
    //         key={`hero ${i}`}
    //         className={`hero-container promo-slide ${
    //           index === i ? 'active' : ''
    //         }`}
    //       >
    //         <div className='promo-hero'>
    //           <div className='img-wrapper'>
    //             <img
    //               id='promoImg'
    //               className={`promo-slide ${index === i ? 'active' : ''}`}
    //               src={data.image}
    //               alt=''
    //             />
    //           </div>

    //           <div
    //             className={`promo-content ${index === 1 ? 'active' : ''}`}
    //             key={`content ${i}`}
    //           >
    //             <h1 className='promo-title'>{data.title}</h1>
    //             <h2 className='promo-subtitle'>{data.subtitle}</h2>
    //             <h1 className='promo-price'>R{data.price}</h1>
    //             <button className='add-to-cart' style={{ width: '200px' }}>
    //               Add To Cart
    //             </button>
    //             <ul>
    //               <li className='promo-item' key={`item ${i}`}>
    //                 {data.detail1}
    //               </li>
    //               <li className='promo-item' key={`item ${i + 1}`}>
    //                 {data.detail2}
    //               </li>
    //               <li className='promo-item' key={`item ${i + 2}`}>
    //                 {data.detail3}
    //               </li>
    //             </ul>
    //           </div>
    //         </div>{' '}
    //       </div>
    //     );
    //   })}

    //   <SliderNav data={promoData} index={index} setIndex={setIndex} />
    // </section>

    <>
      <section className='promo-section'>
        <BsChevronLeft className='left-arrow' onClick={prevSlide} />
        <BsChevronRight className='right-arrow' onClick={nextSlide} />
        <div className='promo-hero'>
          {promoData.map((image, i) => {
            return (
              <div key={image.title}>
                <div className='img-wrapper'>
                  <img
                    id='promoImg'
                    className={`promo-slide ${index === i ? 'active' : ''}`}
                    src={image.image}
                    alt={image.title}
                  />
                </div>
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
            );
          })}
          {/* <div className='shade'></div> */}
        </div>
        <SliderNav data={promoData} index={index} setIndex={setIndex} />
      </section>
    </>
  );
};

export default PromoSection;
