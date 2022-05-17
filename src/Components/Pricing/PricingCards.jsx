import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './pricing.css';

const Pricing = () => {
  return (
    <div className='container-fluid'>
      <div className='container p-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card card1 h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Photoshoot</h5>
                <small className='text-muted'>Individual/Studio</small>
                <br></br>
                <span className='h2'>R550</span>/hr
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>30 Images</li>
                  <li>15 professionally retouched images</li>
                  <li>makeup & hair not included.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card card2 h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Photoshoot</h5>
                <small className='text-muted'>Individual/On-Location</small>
                <br></br>
                <span className='h2'>R750</span>/hr
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>30 Images</li>
                  <li>15 professionally retouched images</li>
                  <li>makeup & hair not included.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card card3 h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Club Recap Video</h5>
                <small className='text-muted'>Event/On-Location</small>
                <br></br>
                <span className='h2'>R1500</span>
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>1 minute Social Media Recap Video.</li>
                  <li>Stunning Visual Effects.</li>
                  <li>Completed Within 3 Days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

