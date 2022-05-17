import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import './pictureGallery.css';
import { heroData } from '../HeroSection/heroData';

const PictureGallery = ({ pictureData }) => {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImage = (image) => {
    setTempImg(image);
    setModal(true);
    // console.log(image);
  };

  return (
    <>
      <div className={`modal ${modal ? ' open' : ''}`}>
        <IconContext.Provider value={{ color: '#fff' }}>
          <GrClose className='close-btn' onClick={() => setModal(false)} />
        </IconContext.Provider>
        <img src={tempImg} alt='' />
      </div>
      <div className='gallery'>
        <h1
          style={{
            width: '100vw;',
            height: 'fit-content',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Photography
        </h1>
        {pictureData.map((image, index) => {
          return (
            <div
              className='picture-gallery'
              key={index}
              onClick={() => {
                getImage(image.image);
              }}
            >
              <img src={image.image} alt='' style={{ width: '100%' }} />
            </div>
          );
        })}
        {/* <div className='img-row'>
          {pictureData.map((image, index) => {
            return (
              <div
                className='img-column'
                key={index}
                onClick={() => {
                  getImage(image.image);
                }}
              >
                <div className='img-wrapper'>
                  <img src={image.image} alt='' />
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className='gallery'>
        {/* <h1>Videography</h1> */}
        {/* {heroData.map((video, index) => {
          return (
            <div
              className='picture-gallery'
              key={index}
              onClick={() => {
                getImage(video.thumbnail);
              }}
            >
              <video
                src={video.video}
                className='gallery-video'
                poster={video.thumbnail}
                key={index}
                muted
                style={{ width: '100%' }}
                onClick={() => {}}
              />
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default PictureGallery;
