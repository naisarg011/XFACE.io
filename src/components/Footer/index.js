import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  ScocialIconLinks,
} from "./FooterElemets";
const toggleHome = () => {
  scroll.scrollToTop();
};
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/about">Works</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Invesstors</FooterLink>
              <FooterLink to="/">Branches</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink to="/">Submit your work</FooterLink>
              <FooterLink to="/">Videos</FooterLink>
              <FooterLink to="/">Photos</FooterLink>
            </FooterLinksItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to="/about">Instagram</FooterLink>
              <FooterLink to="/about">Twitter</FooterLink>
              <FooterLink to="/about">Whatsapp</FooterLink>
              <FooterLink to="/about">Youtube</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Branches</FooterLinksTitle>
              <FooterLink to="/about">Photography</FooterLink>
              <FooterLink to="/about">Web-Developments</FooterLink>
              <FooterLink to="/about">App-Developments</FooterLink>
              <FooterLink to="/about">Penetration Testing</FooterLink>
            </FooterLinksItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              XFACE
            </SocialLogo>
            <WebsiteRights>
              XFACE © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <ScocialIconLinks
                href={"https://www.instagram.com/"}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </ScocialIconLinks>
              <ScocialIconLinks href="https://www.whatsapp.com/" target="_blank" aria-label="WhatsApp">
                <FaWhatsapp />
              </ScocialIconLinks>
              <ScocialIconLinks href="https://twitter.com/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </ScocialIconLinks>
              <ScocialIconLinks href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </ScocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
