import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapp,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapp,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapp>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonial</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investor</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambasadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapp>
              <WebsiteRight>
                Pound &copy; {new Date().getFullYear()} All rights reserverd.
              </WebsiteRight>
              <SocialIcons>
                <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrapp>
          </SocialMedia>
        </FooterWrapp>
      </FooterContainer>
    </>
  );
};

export default Footer;
