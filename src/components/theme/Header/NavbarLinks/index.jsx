import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">
      <b>About</b>
    </AnchorLink>
    <AnchorLink href="#projects">
      <b>Projects</b>
    </AnchorLink>
    <AnchorLink href="#recommend">
      <b>Blog</b>
    </AnchorLink>
    <AnchorLink href="#contact">
      <b>Contact</b>
    </AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
