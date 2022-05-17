import React from 'react';

const SliderNav = ({ data, index, setIndex }) => {
  return (
    <div className='slider-navigation'>
      {data.map((_, i) => {
        return (
          <div
            className={`nav-btn ${index === i ? 'active' : ''}`}
            key={`nav ${i}`}
            onClick={() => {
              setIndex(i);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default SliderNav;
