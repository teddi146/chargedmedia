import React from 'react';
import Contact from '../Components/Contact/ContactForm';
import '../Components/Contact/contactForm.css';
import ContactImg from '../res/images/Sample Images/Videography2.jpg';

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
            <img src={ContactImg} alt='contact logo' />{' '}
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

