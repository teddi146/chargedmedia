import React from 'react';

import { heroData } from '../Components/HeroSection/heroData';
import { pictureData } from '../Components/PictureSection/pictureData';
import HeroSection from '../Components/HeroSection/HeroSection';
import PictureSection from '../Components/PictureSection/PictureSection';
import Pricing from '../Components/Pricing/PricingCards';
import PromoSection from '../Components/PromoSection/PromoSection';

const Home = () => {
  return (
    <>
      <PromoSection />
      <HeroSection heroData={heroData} />
      <PictureSection pictureData={pictureData} />
      <Pricing />
    </>
  );
};

export default Home;

