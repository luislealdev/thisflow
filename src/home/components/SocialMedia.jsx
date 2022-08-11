import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const SocialMedia = ({
  facebookUrl = "",
  instagramUrl = "",
  youtubeUrl = "",
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        {facebookUrl != "" && (
          <a href={facebookUrl} style={{ color: "black" }} target="_blank">
            <FacebookIcon sx={{ width: "7vh", height: "7vh" }} />
          </a>
        )}
        {instagramUrl != "" && (
          <a href={instagramUrl} style={{ color: "black" }} target="_blank">
            <InstagramIcon sx={{ width: "7vh", height: "7vh" }} />
          </a>
        )}
        {youtubeUrl != "" && (
          <a href={youtubeUrl} style={{ color: "black" }} target="_blank">
            <YouTubeIcon sx={{ width: "7vh", height: "7vh" }} />
          </a>
        )}
      </Grid>

      <h3>Follow me!</h3>
    </Grid>
  );
};
