import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome}>XFACE</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="about"
                smooth={true}
                duration={800}
                spy={true}
                exact={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Discover"
                smooth={true}
                duration={800}
                spy={true}
                exact={true}
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="services"
                smooth={true}
                duration={800}
                spy={true}
                exact={true}
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="Contact US"
                smooth={true}
                duration={800}
                spy={true}
                exact={true}
                offset={-80}
              >
                Contact US
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
