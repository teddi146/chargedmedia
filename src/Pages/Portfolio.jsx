import React from 'react';
import PictureGallery from '../Components/PictureGallery/PictureGallery';

import { pictureData } from '../Components/PictureSection/pictureData'

const Portfolio = () => {
  return <PictureGallery pictureData={pictureData} />
};

export default Portfolio;
