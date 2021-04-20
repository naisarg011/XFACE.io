import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideRoute,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about"  onClick={toggle}>About</SidebarLink>
          <SidebarLink to="Discover"  onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="Services"  onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="Contact US"  onClick={toggle}>Contact US</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
