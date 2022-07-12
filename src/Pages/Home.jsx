import React from 'react';

import { heroData } from '../Components/HeroSection/heroData';
import { pictureData } from '../Components/PictureSection/pictureData';
import HeroSection from '../Components/HeroSection/HeroSection';
import PictureSection from '../Components/PictureSection/PictureSection';
import Pricing from '../Components/Pricing/PricingCards';
import PromoSection from '../Components/PromoSection/PromoSection';
import VideoGallery from '../Components/VideoGallery/VideoGallery';
import PictureCards from '../Components/PictureCards/PictureCards';

const Home = () => {
  return (
    <>
      <PromoSection />
      <PictureSection pictureData={pictureData} />
      <VideoGallery videoData={heroData} />
      <PictureCards pictureData={pictureData} />
      {/* <Pricing /> */}
    </>
  );
};

export default Home;

