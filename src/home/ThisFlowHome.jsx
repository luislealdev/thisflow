import React from "react";
import {
  Donations,
  FloatButton,
  ImageGallery,
  NavBar,
  InitialInfo,
  AvatarImg,
} from "./components";
import MediaControlCard from "./components/MediaControlCard";
import "../home/components/styles.css";
import { DescriptionUserText } from "./components/DescriptionUserText";
import { Grid } from "@mui/material";
import { SocialMedia } from "./components/SocialMedia";

export const ThisFlowHome = () => {
  return (
    <>
      <NavBar />
      <InitialInfo />
      <div className="bg-principal cool">
        <div className="bg-secondary margin-2 padding-2 not-margin-top border-radius center">
          <h5>
            Add a <span>profile picture</span> and <span>describe you</span>
          </h5>

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <AvatarImg />
            </Grid>

            <Grid item xs={3}>
              <DescriptionUserText />
            </Grid>
          </Grid>

          <h5>
            Create your <span>own gallery</span>
          </h5>
          <ImageGallery />
          <h5>
            Let your fans <span>play your music</span> from the website{" "}
          </h5>
          <MediaControlCard />
          <h5>
            Add your <span>social media</span>
          </h5>
          <SocialMedia/>

          <h6>Help us to be better!</h6>
          <Donations />
        </div>
      </div>

      <FloatButton />
    </>
  );
};
