import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";
import data from "../Skills/skills.json";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt={data.defaultDescription} />
      </Thumbnail>
      <Details>
        <h2>Hi There!</h2>
        <p>
          During my graduation, I had been associated with various startups as a
          intern and have got a lot of valuable experience
        </p>
        <h3>Skills</h3>
        {data.skills.map(skill => {
          return (
            <Chip
              size="medium"
              color="primary"
              style={{ margin: "6px", padding: "5px" }}
              label={skill.name}
              deleteIcon={<DoneIcon />}
            />
          );
        })}
        <br />
        <br />
        <br />

        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
