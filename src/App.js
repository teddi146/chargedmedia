import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import Portfolio from './Pages/Portfolio';
import Pricing from './Pages/Pricing';
import Bookings from './Pages/Bookings';
import Contact from './Pages/Contact';
import AuthContext from './Context/authContext';
import { useState } from 'react';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  // const handleClick = () => {
  //   // setClick(!click);
  // };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const callBackendApi = async () => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);

    console.log('userId: ' + userId);
    console.log('token: ' + token);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  useEffect(() => {
    callBackendApi()
      .then((res) => setData(res.express))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          token: token,
          userId: userId,
          click: click,
          isOpen: isOpen,
          closeMobileMenu: closeMobileMenu,
          toggle: toggle,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <Navbar />
          <Sidebar />
          <div id='page-container'>
            <div id='content-wrap'>
              <Routes>
                <Route path='/' exact element={<Home />} />
                {/* {token && <Redirect from='/' to='bookings' />} */}
                {/* {!token && <Redirect from='/survey' to='signup' />} */}{' '}
                <Route path='/portfolio' exact element={<Portfolio />} />
                <Route path='/pricing' exact element={<Pricing />} />
                <Route
                  path='/bookings'
                  exact
                  element={
                    !token ? <Navigate replace to={'/'} /> : <Bookings />
                  }
                />
                <Route path='/contact' exact element={<Contact />} />
                {/* <Route path='/signup' exact element={<Signup />} /> */}
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;

