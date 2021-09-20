import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={800}
            spy={true}
            exact={true}
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="Discover"
            onClick={toggle}
            smooth={true}
            duration={800}
            spy={true}
            exact={true}
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={800}
            spy={true}
            exact={true}
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="Contact US"
            onClick={toggle}
            smooth={true}
            duration={800}
            spy={true}
            exact={true}
            offset={-80}
          >
            Contact US
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
