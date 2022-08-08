import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";

export const SocialMedia = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <FacebookIcon sx={{ width: "7vh", height: "7vh" }} />
        <InstagramIcon sx={{ width: "7vh", height: "7vh" }} />
        <YouTubeIcon sx={{ width: "7vh", height: "7vh" }} />
      </Grid>
      <h3>Follow me!</h3>

      
    </Grid>
  );
};
