import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
    <div className='loading-container'>
      <div className='loading'>
        <div className='arc'></div>
        <div className='arc'></div>
        <div className='arc'></div>
      </div>
    </div>
  );
};

export default Spinner;
