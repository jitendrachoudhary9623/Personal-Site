import React from "react";

import projects from "./projects.json";
import { ProjectItem } from "./projectItem";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import ShowMoreText from "react-show-more-text";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: "5vw",
    marginRight: "5vw",
    backgroundColor: "#f1f1f1"
  },
  media: {
    height: 0,
    paddingTop: "100%" // 16:9
  },
  gridList: {
    flexWrap: "nowrap",
    overflow: "auto",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  card: {
    minWidth: 220,
    maxWidth: 250
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const textStyles = {
  maxWidth: "220px"
};
export const Projects = () => {
  const classes = useStyles();

  return (
    <div>
      <h2 style={{ marginLeft: "10vw" }}>Projects</h2>
      <div className={classes.root}>
        <GridList className={classes.gridList}>
          {projects.data.map(project => (
            <>
              <GridListTile
                key={project.id}
                style={{
                  marginTop: "1vw",
                  marginLeft: "3vw"
                }}
              >
                <Card className={classes.card}>
                  <CardContent>
                    <CardMedia
                      className={classes.media}
                      image={project.featureImage}
                      title={project.title}
                    />
                    <Typography component="h3" style={textStyles}>
                      {project.title}
                    </Typography>
                    <Typography
                      className={classes.pos}
                      color="textSecondary"
                      variant="body2"
                      component="p"
                      style={textStyles}
                    >
                      {project.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                      style={textStyles}
                    >
                      <ShowMoreText
                        /* Default options */
                        lines={2}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                        expanded={false}
                        width={220}
                      >
                        {project.description}
                      </ShowMoreText>
                    </Typography>
                    <br />
                    <div style={{ maxWidth: "220px" }}>
                      {project.technologies.slice(0, 4).map(skill => {
                        return (
                          <Chip
                            size="small"
                            style={{ margin: "2px" }}
                            label={skill}
                          />
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardActions>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "#606060",
                        color: "white",
                        width: "100%",
                        padding: "3%"
                      }}
                    >
                      See Project
                    </div>
                  </CardActions>
                </Card>
              </GridListTile>
            </>
          ))}
        </GridList>
      </div>
    </div>
  );
};
