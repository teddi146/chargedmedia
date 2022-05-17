import React, { useContext } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrapper,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from './SidebarElements';
import AuthContext from '../../Context/authContext';

const Sidebar = () => {
  const context = useContext(AuthContext);
  return (
    <SidebarContainer isOpen={context.isOpen} onClick={context.toggle}>
      <Icon onClick={context.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={context.toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='/portfolio' onClick={context.toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to='/pricing' onClick={context.toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='/booking' onClick={context.toggle}>
            Booking
          </SidebarLink>
          <SidebarLink to='/contact' onClick={context.toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrapper>
        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
      </SideBtnWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
