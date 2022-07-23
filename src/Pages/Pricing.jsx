import React from 'react';
import PricingCards from '../Components/Pricing/PricingCards';
import { promoData } from '../Components/PromoSection/promoData';

const Pricing = () => {
  return <PricingCards servicesData={promoData} />;
};

export default Pricing;

