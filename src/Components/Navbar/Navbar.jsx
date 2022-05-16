import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {
  FaBars,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaUserAlt,
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import './navbar.css';

const Navbar = () => {
  return (
    <>
      {/* <IconContext.Provider className='icp' value={{ size: '1.5em' }}> */}
      <header>
        <Link to='/' className='brand'>
          Media
        </Link>
        <div className='menu-btn'>
          <FiMenu />
        </div>
        <div className='navigation'>
          <div className='navigation-items'>
            <Link to='/' className='navigation-links'>
              Home
            </Link>
            <Link to='/portfolio' className='navigation-links'>
              Porfolio
            </Link>
            <Link to='/pricing' className='navigation-links'>
              Pricing
            </Link>
            <Link to='/bookings' className='navigation-links'>
              Bookings
            </Link>
            <Link to='/Contact' className='navigation-links'>
              Contact
            </Link>
          </div>
        </div>{' '}
        <IconContext.Provider value={{ size: '1.5em' }}>
          <ul className='socials'>
            <li className='social-items'>
              <a href='https://www.instagram.com' target='_blank'>
                <FaInstagram />
              </a>
            </li>
            <li className='social-items'>
              <a href='https://www.tiktok.com' target='_blank'>
                <FaTiktok />
              </a>
            </li>
            <li className='social-items'>
              <a href='https://www.youtube.com' target='_blank'>
                <FaYoutube />
              </a>
            </li>
            <li className='social-items'>
              <a href='https://www.twitter.com' target='_blank'>
                <FaTwitter />
              </a>
            </li>
            <li className='social-items'>
              <a to='/'>
                <FaUserAlt />
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </header>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
