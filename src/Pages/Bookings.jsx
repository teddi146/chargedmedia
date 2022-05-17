import React from 'react';
import BookingForm from '../Components/BookingForm/BookingForm';
import { promoData } from '../Components/PromoSection/promoData';

const Bookings = () => {
  return <BookingForm promoData={promoData} />;
};

export default Bookings;

