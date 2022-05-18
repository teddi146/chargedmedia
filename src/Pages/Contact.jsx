import React from 'react';
import LazyLoad from 'react-lazyload';

import Contact from '../Components/Contact/ContactForm';
import '../Components/Contact/contactForm.css';
import ContactImg from '../assets/images/Sample Images/Videography2.jpg';

const ContactPage = () => {
  return (
    <div className='contact-form'>
      <div className='form-grid'>
        <div className='contact-img-container'>
          <div className='contact-content'>
            <h1 className='contact-h1'>Got Any Questions</h1>
            <p className='contact-p'>Feel free to contact us</p>
          </div>
          <div className='img-wrapper-contact'>
            <LazyLoad
              height={'100%'}
              // unmountIfInvisible={true}
              debounce={true}
              throttle
            >
              <img src={ContactImg} alt='contact logo' />{' '}
            </LazyLoad>
          </div>
          <div className='shade'></div>
        </div>
        <div className='contact-form-wrapper'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

