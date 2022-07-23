import React, { useState, useRef, useContext } from 'react';

import { Link } from 'react-router-dom';
import { FaYoutube, FaTiktok, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoIosLogOut } from 'react-icons/io';

import './navbar.css';
import Logo from '../../assets/images/gallery/Web_150Artboard 1.png';
import AuthContext from '../../Context/authContext';
import { navMenu } from './navMenu';
import Signup from '../../Pages/Signup';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);
  const context = useContext(AuthContext);
  const barMenu = useRef(null);
  const navItems = useRef(null);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  const showSidebar = () => {
    console.log(barMenu.current);
    console.log(navItems.current);

    barMenu.current.classList.toggle('active');
    navItems.current.classList.toggle('active');
    console.log('in IF');
    setIsActive(true);
  };

  const closeSidebar = () => {
    barMenu.current.classList.remove('active');
    navItems.current.classList.remove('active');
    setIsActive(false);
  };
  return (
    <>
      <div className={`signup-modal ${modal ? 'active' : ''}`}>
        <Signup toggleModal={toggleModal} />
      </div>

      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <h1 style={{ fontFamily: 'AlishaFree' }}>Media</h1>
          </div>
          <div className='nav-menu'>
            <ul className='nav-items' ref={navItems} onClick={closeSidebar}>
              {navMenu.map((link, i) => {
                return (
                  <React.Fragment key={`nav-link-${i}`}>
                    <li className='nav-item'>
                      <Link className='nav-links' to={link.href}>
                        {link.title}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className='nav-social-icons'>
            <ul className='nav-items'>
              <li className='nav-item'>
                <a
                  href='https://www.instagram.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href='https://www.tiktok.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaTiktok />
                </a>
              </li>

              <li className='nav-item'>
                <a
                  href='https://www.youtube.com/channel/UCXKvxe8LJnQPn5sr34wLqJQ/videos'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaYoutube />
                </a>
              </li>
              <li className='nav-item' onClick={toggleModal}>
                {/* <Link to='signup'> */}

                {!context.token ? (
                  <FaUserAlt style={{ cursor: 'pointer' }} />
                ) : (
                  <IoIosLogOut style={{ cursor: 'pointer' }} />
                )}
                {/* </Link> */}
              </li>
              <li className='nav-item'>
                <FaShoppingCart />
              </li>
            </ul>
          </div>
          <div className='bar-menu' ref={barMenu} onClick={showSidebar}>
            {/* <FiMenu className='bar' /> */}
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

