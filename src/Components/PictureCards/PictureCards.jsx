import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

import './cards.css';

const PictureCards = ({ props, pictureData }) => {
  const [isCurrent, setIsCurrent] = useState('current--card');
  const [isNext, setIsNext] = useState('next--card');
  const [isPrev, setPrev] = useState('previous--card');
  const [isCurrentInfo, setIsCurrentInfo] = useState('current--info');
  const [isNextInfo, setIsNextInfo] = useState('next--info');
  const [isPrevInfo, setPrevInfo] = useState('previous--info');
  const [isCurrentImage, setIsCurrentImage] = useState('current--image');
  const [isNextImage, setIsNextImage] = useState('next--image');
  const [isPrevImage, setIsPrevImage] = useState('previous--image');
  const [swapDirection, setSwapDirection] = useState('');

  const { gsap } = window;

  const buttonRightRef = useRef(null);
  const buttonLeftRef = useRef(null);

  const cardsContainerElRef = useRef(null);
  const appBgContainerElRef = useRef(null);
  const cardInfosContainerElRef = useRef(null);

  const currentCardElRef = useRef(null);
  const previousCardElRef = useRef(null);
  const nextCardElRef = useRef(null);

  const currentInfoElRef = useRef(null);
  const previousInfoElRef = useRef(null);
  const nextInfoElRef = useRef(null);

  const currentBgImageElRef = useRef(null);
  const previousBgImageElRef = useRef(null);
  const nextBgImageElRef = useRef(null);

  const imageRef = useRef([]);
  const cardImageRef = useRef(null);
  const loaderElRef = useRef(null);

  function swapCards(e) {
    console.log('e: ', e);
    let direction = '';
    if (e.target.parentElement.classList[1] === 'btn--left') {
      direction = 'left';
    } else if (e.target.parentElement.classList[1] === 'btn--right') {
      direction = 'right';
    }
    setSwapDirection(direction);
    changeInfo(direction);
    swapCardsClass();

    removeCardEvents(currentCardElRef.current);

    function swapCardsClass() {
      currentCardElRef.current.style.zIndex = '50';
      currentBgImageElRef.current.style.zIndex = '-2';

      if (direction === 'right') {
        previousCardElRef.current.style.zIndex = '20';
        nextCardElRef.current.style.zIndex = '30';
        nextBgImageElRef.current.style.zIndex = '-1';

        setIsCurrent(isPrev);
        setIsNext(isCurrent);
        setPrev(isNext);

        setIsCurrentImage(isPrevImage);
        setIsNextImage(isCurrentImage);
        setIsPrevImage(isNextImage);
      } else if (direction === 'left') {
        previousCardElRef.current.style.zIndex = '30';
        nextCardElRef.current.style.zIndex = '20';
        previousBgImageElRef.current.style.zIndex = '-1';

        setIsCurrent(isNext);
        setIsNext(isPrev);
        setPrev(isCurrent);

        setIsCurrentImage(isNextImage);
        setIsNextImage(isPrevImage);
        setIsPrevImage(isCurrentImage);
      }
    }
  }

  function changeInfo(direction) {
    gsap
      .timeline()
      .to([buttonLeftRef.current, buttonRightRef.current], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: 'none',
      })
      .to(
        Array.from(currentInfoElRef.current.getElementsByClassName('text')),
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: '-120px',
          opacity: 0,
        },
        '-=',
      )
      .call(() => {
        swapInfosClass(direction);
      })
      // .call(() => initCardEvents())
      .fromTo(
        direction === 'right'
          ? Array.from(nextInfoElRef.current.getElementsByClassName('text'))
          : Array.from(
              previousInfoElRef.current.getElementsByClassName('text'),
            ),
        {
          opacity: 0,
          translateY: '40px',
        },
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: '0px',
          opacity: 1,
        },
      )
      .to([buttonLeftRef.current, buttonRightRef.current], {
        duration: 0.2,
        opacity: 1,
        pointerEvents: 'all',
      });

    function swapInfosClass(direction) {
      // currentInfoElRef.current.classList.remove('current--info');
      // previousInfoElRef.current.classList.remove('previous--info');
      // nextInfoElRef.current.classList.remove('next--info');
      console.log('SwapInfoClass');
      console.log(direction);
      console.log('currentInfo', currentInfoElRef.current.children);

      if (direction === 'right') {
        setIsCurrentInfo(isPrevInfo);
        setIsNextInfo(isCurrentInfo);
        setPrevInfo(isNextInfo);
        console.log('Direction: ', direction);
      } else if (direction === 'left') {
        setIsCurrentInfo(isNextInfo);
        setIsNextInfo(isPrevInfo);
        setPrevInfo(isCurrentInfo);
        console.log('Direction: ', direction);
      }
    }
  }

  function updateCard(e) {
    console.log('e: ', e);
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const centerPosition = {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
    };
    let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
    gsap.set(card, {
      '--current-card-rotation-offset': `${angle}deg`,
    });
    // const currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
    gsap.set(currentInfoElRef.current, {
      rotateY: `${angle}deg`,
    });
  }

  function resetCardTransforms(e) {
    const card = e.currentTarget;
    // const currentInfoEl = cardInfosContainerEl.querySelector('.current--info');
    gsap.set(card, {
      '--current-card-rotation-offset': 0,
    });
    gsap.set(currentInfoElRef.current, {
      rotateY: 0,
    });
  }

  // function initCardEvents() {
  //   // const currentCardEl = cardsContainerEl.querySelector('.current--card');
  //   currentCardElRef.current.addEventListener('pointermove', (e) => {
  //     updateCard(e);
  //   });
  //   currentCardElRef.current.addEventListener('pointerout', (e) => {
  //     resetCardTransforms(e);
  //   });
  // }

  function removeCardEvents(card) {
    card.removeEventListener('pointermove', updateCard);
  }

  function init() {
    let tl = gsap.timeline();

    tl.to(cardsContainerElRef.current.children, {
      delay: 0.15,
      duration: 0.5,
      stagger: {
        ease: 'power4.inOut',
        from: 'right',
        amount: 0.1,
      },
      '--card-translateY-offset': '0%',
    })
      .to(Array.from(currentInfoElRef.current.getElementsByClassName('text')), {
        delay: 0.5,
        duration: 0.4,
        stagger: 0.1,
        opacity: 1,
        translateY: 0,
      })
      .to(
        [buttonLeftRef.current, buttonRightRef.current],
        {
          duration: 0.4,
          opacity: 1,
          pointerEvents: 'all',
        },
        '-=0.4',
      );
  }

  const waitForImages = () => {
    const images = document.querySelectorAll('img');
    console.log(images);
    // const images = [
    //   ...Array.from(
    //     cardsContainerElRef.current.getElementsByClassName('card-img'),
    //   ),
    // ];
    const totalImages = images.length;
    let loadedImages = 0;

    gsap.set(cardsContainerElRef.current.children, {
      '--card-translateY-offset': '100vh',
    });
    gsap.set(
      Array.from(currentInfoElRef.current.getElementsByClassName('text')),
      {
        translateY: '40px',
        opacity: 0,
      },
    );
    gsap.set([buttonLeftRef.current, buttonRightRef.current], {
      pointerEvents: 'none',
      opacity: '0',
    });

    images.forEach((image) => {
      imagesLoaded(image, (instance) => {
        if (instance.isComplete) {
          loadedImages++;
          let loadProgress = loadedImages / totalImages;

          gsap.to(loaderElRef.current, {
            duration: 1,
            scaleX: loadProgress,
            backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
          });

          if (totalImages === loadedImages) {
            gsap
              .timeline()
              .to('.loading__wrapper', {
                duration: 0.8,
                opacity: 0,
                pointerEvents: 'none',
              })
              .call(() => init());
          }
        }
      });
    });
  };

  useEffect(() => {
    waitForImages();
    return () => {};
  }, []);

  return (
    <section className='card-section'>
      <div className='app'>
        <div className='cardList'>
          <button
            className='cardList__btn  btn--left'
            onClick={swapCards}
            ref={buttonLeftRef}
          >
            {/* <div className='icon'> */}
            <IconContext.Provider
              className='icp'
              value={{ size: '2rem', color: '#fff' }}
            >
              <BsChevronLeft />
            </IconContext.Provider>
            {/* </div> */}
          </button>

          <div className='cards__wrapper' ref={cardsContainerElRef}>
            <div
              className={`card ${isCurrent}`}
              ref={currentCardElRef}
              onPointerMove={(e) => {
                updateCard(e);
              }}
              onPointerOut={(e) => {
                resetCardTransforms(e);
              }}
            >
              <div className='card__image' ref={cardImageRef}>
                <img
                  className='card-img'
                  src={pictureData[6].image}
                  alt=''
                  ref={imageRef}
                />
              </div>
            </div>

            <div
              className={`card ${isNext}`}
              ref={nextCardElRef}
              onPointerMove={(e) => {
                updateCard(e);
              }}
              onPointerOut={(e) => {
                resetCardTransforms(e);
              }}
            >
              <div className='card__image' ref={cardImageRef}>
                <img
                  className='card-img'
                  src={pictureData[5].image}
                  alt=''
                  ref={imageRef}
                />
              </div>
            </div>

            <div
              className={`card ${isPrev}`}
              ref={previousCardElRef}
              onPointerMove={(e) => {
                updateCard(e);
              }}
              onPointerOut={(e) => {
                resetCardTransforms(e);
              }}
            >
              <div className='card__image' ref={cardImageRef}>
                <img
                  className='card-img'
                  src={pictureData[8].image}
                  alt=''
                  ref={imageRef}
                />
              </div>
            </div>
          </div>

          <button
            className='cardList__btn  btn--right'
            onClick={swapCards}
            ref={buttonRightRef}
          >
            {/* <div className='icon'> */}
            <IconContext.Provider
              className='icp'
              value={{ size: '2rem', color: '#fff' }}
            >
              <BsChevronRight />
            </IconContext.Provider>
            {/* </div> */}
          </button>
        </div>

        <div className='infoList'>
          <div className='info__wrapper' ref={cardInfosContainerElRef}>
            <div
              className={`info ${isCurrentInfo} `}
              ref={isCurrentInfo ? currentInfoElRef : ''}
            >
              <h1 className='text name'>{pictureData[6].title}</h1>
              <h4 className='text location'>ChargedMedia</h4>
              <p className='text description'>{pictureData[6].subtitle}</p>
            </div>

            <div
              className={`info ${isNextInfo} `}
              ref={isNextInfo ? nextInfoElRef : ''}
            >
              <h1 className='text name'>{pictureData[5].title}</h1>
              <h4 className='text location'>ChargedMedia</h4>
              <p className='text description'>{pictureData[5].subtitle}</p>
            </div>

            <div
              className={`info ${isPrevInfo} `}
              ref={isPrevInfo ? previousInfoElRef : ''}
            >
              <h1 className='text name'>{pictureData[8].title}</h1>
              <h4 className='text location'>ChargedMedia</h4>
              <p className='text description'>{pictureData[8].subtitle}</p>
            </div>
          </div>
        </div>

        <div className='app__bg' ref={appBgContainerElRef}>
          <div
            className={`app__bg__image ${isCurrentImage}`}
            ref={currentBgImageElRef}
          >
            <img
              className='card-img'
              src={pictureData[6].image}
              alt=''
              ref={imageRef}
            />
          </div>
          <div
            className={`app__bg__image ${isNextImage}`}
            ref={nextBgImageElRef}
          >
            <img
              className='card-img'
              src={pictureData[5].image}
              alt=''
              ref={imageRef}
            />
          </div>
          <div
            className={`app__bg__image ${isPrevImage}`}
            ref={previousBgImageElRef}
          >
            <img
              className='card-img'
              src={pictureData[8].image}
              alt=''
              ref={imageRef}
            />
          </div>
        </div>
      </div>

      <div className='loading__wrapper'>
        <div className='loader--text'>Loading...</div>
        <div className='loader'>
          <span ref={loaderElRef}></span>
        </div>
      </div>

      {/* <svg className='icons' style={{ display: 'none' }}>
        <BsChevronRight />
        <BsChevronLeft />
      </svg> */}
    </section>
  );
};

export default PictureCards;
