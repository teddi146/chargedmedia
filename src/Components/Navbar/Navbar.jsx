import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { FaYoutube, FaTiktok, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

import './navbar.css';
import Logo from '../../assets/images/gallery/Web_150Artboard 1.png';
import AuthContext from '../../Context/authContext';

const Navbar = () => {
  const context = useContext(AuthContext);

  return (
    <>
      <IconContext.Provider className='icp' value={{ size: '1.5em' }}>
        <header>
          <Link
            to='/'
            className='brand'
            style={{ display: 'flex', alignItems: 'end' }}
          >
            <img
              src={Logo}
              style={{ width: '50px', marginRight: '3px' }}
              alt=''
            />
          </Link>
          <div className='menu-btn' onClick={context.toggle}>
            <FiMenu className='menuBars' />
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
                Services
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
                <a
                  href='https://www.instagram.com/chargedmedia_/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className='social-items'>
                <a
                  href='https://www.tiktok.com/@chargedmedia?is_from_webapp=1&sender_device=pc'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaTiktok />
                </a>
              </li>
              <li className='social-items'>
                <a
                  href='https://www.youtube.com/channel/UCXKvxe8LJnQPn5sr34wLqJQ'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaYoutube />
                </a>
              </li>
              {/* <li className='social-items'>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter />
              </a>
            </li> */}
              <li className='social-items'>
                <a href='/checkout'>
                  <FaShoppingCart />
                </a>
              </li>
              <li className='social-items'>
                <a href='/'>
                  <FaUserAlt />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </header>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

