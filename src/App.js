import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import Portfolio from './Pages/Portfolio';
import Pricing from './Pages/Pricing';
import Bookings from './Pages/Bookings';
import Contact from './Pages/Contact';
import IntersectionObserver from './Components/util/IntersectionObserver';
import AuthContext from './Context/authContext';
import { useState } from 'react';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  const [click, setClick] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.target.id === 'headerVideo') {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      }
    });
  };

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IntersectionObserver callback={callback} options={options} />
      <AuthContext.Provider
        value={{
          isOpen: isOpen,
          click: click,
          closeMobileMenu: closeMobileMenu,
          toggle: toggle,
        }}
      >
        <Router>
          <Navbar />
          <Sidebar />
          <>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/portfolio' exact element={<Portfolio />} />
              <Route path='/pricing' exact element={<Pricing />} />
              <Route path='/bookings' exact element={<Bookings />} />
              <Route path='/contact' exact element={<Contact />} />
            </Routes>
          </>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;

