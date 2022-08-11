import { Grid } from "@mui/material";
import { AvatarImg, Credits, FloatButton, GridImages, ImageGallery } from "../../home/components";
import { DescriptionUserText } from "../../home/components/DescriptionUserText";
import MediaControlCard from "../../home/components/MediaControlCard";
import { NewsCard } from "../../home/components/NewsCard";
import { SocialMedia } from "../../home/components/SocialMedia";
import "../../home/components/styles.css";

export const UserPageInfo = ({ user }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="bg-principal cool ">
        <div className="bg-secondary mt-5 padding-2 not-margin-top border-radius center">

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <AvatarImg src={user.profilePicture} />
            </Grid>

            <Grid item xs={3}>
              <DescriptionUserText displayName={user.displayName} phrase={user.phrase} /> 
            </Grid>
          </Grid>
          <br/>

          <SocialMedia facebookUrl={user.facebookUrl} instagramUrl={user.instagramUrl} youtubeUrl={user.youtubeUrl}/> 
          <br/>
          <NewsCard lastNewTitle={user.lastNewTitle} lastNewText={user.lastNewText} lastNewImage={user.lastNewImage}/>
          <br/>
          <GridImages photos={user.photos} /> 
        </div>

      </div>

      <FloatButton url={user.instagramUrl}/>
      <Credits/>
    </div>
  );
};
