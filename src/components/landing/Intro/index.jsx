import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail, Link } from "./styles";
import data from "../../../data/config";
import social from "../../theme/Footer/social.json";

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>{data.defaultDescription}</h4>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            style={{ margin: "8px" }}
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="24" margin="8" src={icon} alt={name} />
          </a>
        ))}
        <br />
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
        <br />
        <br />
        <br />
        <Button as={AnchorLink} href="#contact">
          Download Resume
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt={data.defaultDescription} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
