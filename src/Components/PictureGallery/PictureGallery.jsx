import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import LazyLoad from 'react-lazyload';

import './pictureGallery.css';

const PictureGallery = ({ pictureData }) => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImage = (image) => {
    setTempImg(image);
    setModal(true);
  };

  return (
    <>
      <div className={`modal ${modal ? ' open' : ''}`}>
        <IconContext.Provider value={{ color: '#fff' }}>
          <GrClose className='close-btn' onClick={() => setModal(false)} />
        </IconContext.Provider>
        {/* <LazyLoad
          height={'100%'}
          // unmountIfInvisible={true}
          debounce={true}
          throttle
        > */}
        <img src={tempImg} alt='' />
        {/* </LazyLoad> */}
      </div>
      <section style={{ marginTop: '80px' }}>
        <div className='container3'>
          <h1>Gallery</h1>
          <div className='image-container3'>
            {pictureData.map((image, i) => {
              return (
                <div className='image' onClick={() => getImage(image.image)}>
                  <img src={image.image} alt='' />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PictureGallery;
