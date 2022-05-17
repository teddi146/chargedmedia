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
          <SidebarLink to='up' onClick={context.toggle}>
            About
          </SidebarLink>
          <SidebarLink to='use' onClick={context.toggle}>
            How To Use
          </SidebarLink>
          <SidebarLink to='services' onClick={context.toggle}>
            Services
          </SidebarLink>
          <SidebarLink to='contact' onClick={context.toggle}>
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
