import React from 'react';

export default React.createContext({
  token: null,
  userId: null,
  login: (token, userId, tokenExpiration) => {},
  logout: () => {},
  closeMobileMenu: null,
  isOpen: null,
  click: null,
  toggle: null,
});
