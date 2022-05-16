import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  //   const toggleHome = () => {
  //     scroll.scrollToTop();
  //   };

  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className='footer-links-container'>
          <div className='footer-links-wrapper'>
            <div className='footer-link-items'>
              <h1 className='footer-link-title'> About Us </h1>
              <Link className='footer-link' to='/'>
                How it Works
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
              <Link to='/' className='footer-link'>
                Contact
              </Link>
              <Link to='/' className='footer-link'>
                Support
              </Link>
              <Link to='/' className='footer-link'>
                Investors
              </Link>
            </div>
          </div>
          <div className='footer-links-wrapper'>
            <div className='footer-link-items'>
              <h1 className='footer-link-title'> Social Media </h1>
              <a
                href='//www.instagram.com'
                target='_blank'
                aria-label='instagram'
                className='footer-link'
              >
                Instagram
              </a>
              <a
                href='//www.tiktok.com'
                target='_blank'
                aria-label='tiktok'
                className='footer-link'
              >
                Tiktok
              </a>
              <a
                href='//www.youtube.com'
                target='_blank'
                aria-label='youtube'
                className='footer-link'
              >
                YouTube
              </a>
              <a
                href='//www.twitter.com'
                target='_blank'
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
                href='//www.instagram.com'
                target='_blank'
                aria-label='instagram'
              >
                <FaInstagram />
              </a>
              <a
                className='social-icon-link'
                href='//www.tiktok.com'
                target='_blank'
                aria-label='tiktok'
              >
                <FaTiktok />
              </a>
              <a
                className='social-icon-link'
                href='//www.youtube.com'
                target='_blank'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
              <a
                className='social-icon-link'
                href='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
