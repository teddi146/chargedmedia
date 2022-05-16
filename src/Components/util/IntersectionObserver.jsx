import React from 'react';

const IntersectionObserver = ({ callback, options }) => {
  const videoElement = document.getElementById('headerVideo')
  console.log(videoElement);

  let observerFunction = async () => {
    let observer = new observer(callback, options);

    await videoElement.forEach((video) => {
      observer.observe(video);
      console.log('observerFunction');
    });
  };

  return <div></div>;
};

export default IntersectionObserver;
