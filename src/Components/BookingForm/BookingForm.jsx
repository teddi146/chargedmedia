import React from 'react';

import PromoSection from '../PromoSection/PromoSection';
import './bookingForm.css';

const BookingForm = ({ promoData }) => {
  return (
    <section className='bookingForm-container'>
      <PromoSection />
    </section>
  );
};

export default BookingForm;
