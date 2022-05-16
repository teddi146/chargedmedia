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
                <h5 className='card-title'>Basic</h5>
                <small className='text-muted'>Individual</small>
                <br></br>
                <span className='h2'>$8</span>/month
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilisis in</li>
                  <li>Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card card2 h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Standard</h5>
                <small className='text-muted'>Small Business</small>
                <br></br>
                <span className='h2'>$20</span>/month
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilisis in</li>
                  <li>Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 mb-4'>
            <div className='card card3 h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Premium</h5>
                <small className='text-muted'>Large Company</small>
                <br></br>
                <span className='h2'>$40</span>/month
                <br></br>
                <div className='d-grid my-3'>
                  <button className='btn btn-outline-dark btn-block'>
                    Select
                  </button>
                </div>
                <ul>
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilisis in</li>
                  <li>Vestibulum at eros</li>
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
