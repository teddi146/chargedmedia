import React from 'react';

export default React.createContext({
  token: null,
  userId: null,
  login: (token, userId, tokenEpiration) => {},
  logout: () => {},
  click: null,
  closeMobileMenu: null,
  onMouseEnter: null,
  onMouseLeave: null,
  changeNav: null,
  toggle: null,
  isOpen: null,
});
