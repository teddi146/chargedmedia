import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  //   const toggleHome = () => {
  //     scroll.scrollToTop();
  //   };

  return (
    <div id='footer' className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-links-container'>
          <div className='footer-links-wrapper'>
            <div className='footer-link-items'>
              <h1 className='footer-link-title'> About Us </h1>
              <Link className='footer-link' to='/'>
                Our Story
              </Link>
              <Link to='/' className='footer-link'>
                Careers
              </Link>
              <Link to='/' className='footer-link'>
                Terms of Service
              </Link>
            </div>
          </div>
          <div className='footer-links-wrapper'>
            <div className='footer-link-items'>
              <h1 className='footer-link-title'> Contact Us </h1>
              <Link to='/contact' className='footer-link'>
                Contact
              </Link>
              {/* <Link to='/' className='footer-link'>
                Support
              </Link>
              <Link to='/' className='footer-link'>
                Investors
              </Link> */}
            </div>
          </div>
          <div className='footer-links-wrapper'>
            <div className='footer-link-items'>
              <h1 className='footer-link-title'> Social Media </h1>
              <a
                href='https://www.instagram.com/chargedmedia_/'
                target='_blank'
                rel='noreferrer'
                aria-label='instagram'
                className='footer-link'
              >
                Instagram
              </a>
              <a
                href='https://www.tiktok.com/@chargedmedia?is_from_webapp=1&sender_device=pc'
                target='_blank'
                rel='noreferrer'
                aria-label='tiktok'
                className='footer-link'
              >
                Tiktok
              </a>
              <a
                href='https://www.youtube.com/channel/UCXKvxe8LJnQPn5sr34wLqJQ'
                target='_blank'
                rel='noreferrer'
                aria-label='youtube'
                className='footer-link'
              >
                YouTube
              </a>
              <a
                href='//www.twitter.com'
                target='_blank'
                rel='noreferrer'
                aria-label='twitter'
                className='footer-link'
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrapper'>
            <Link className='social-logo' to='/'>
              Media
            </Link>
            <small className='website-rights'>
              Charged Media © {new Date().getFullYear()} All rights reserved.
            </small>
            <div className='social-icons'>
              <a
                className='social-icon-link'
                href='https://www.instagram.com/chargedmedia_/'
                rel='noreferrer'
                target='_blank'
                aria-label='instagram'
              >
                <FaInstagram />
              </a>
              <a
                className='social-icon-link'
                href='https://www.tiktok.com/@chargedmedia?is_from_webapp=1&sender_device=pc'
                rel='noreferrer'
                target='_blank'
                aria-label='tiktok'
              >
                <FaTiktok />
              </a>
              <a
                className='social-icon-link'
                href='https://www.youtube.com/channel/UCXKvxe8LJnQPn5sr34wLqJQ'
                rel='noreferrer'
                target='_blank'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
              {/* <a
                className='social-icon-link'
                href='//www.twitter.com'
                rel='noreferrer'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;

