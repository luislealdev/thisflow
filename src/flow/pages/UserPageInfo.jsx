import { Grid } from "@mui/material";
import { AvatarImg, FloatButton, ImageGallery } from "../../home/components";
import { DescriptionUserText } from "../../home/components/DescriptionUserText";
import MediaControlCard from "../../home/components/MediaControlCard";
import { SocialMedia } from "../../home/components/SocialMedia";
import "../../home/components/styles.css";

export const UserPageInfo = ({ user }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="bg-principal cool ">
        <div className="bg-secondary mt-5 margin-2 padding-2 not-margin-top border-radius center">

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
              <DescriptionUserText displayName={user.displayName} phrase={user.phrase} /> {/*Hacerlo funcional*/}
            </Grid>
          </Grid>
          <ImageGallery /> {/*Hacerlo funcional*/}
          <div className="songs">
            {" "}
            {/*Hacerlo funcional*/}
            <MediaControlCard
              songName="Where Are Ü Now"
              authors="Diplo, Jack Ü & Skrillex"
              img="src/home/assets/img/whereareu.jpg"
            />
            <MediaControlCard
              songName="In Da Getto"
              authors="J Balvin & Skrillex"
              img="src/home/assets/img/idg.jpeg"
            />
            <MediaControlCard
              songName="Purple Lamborghini"
              authors="Skrillex & Rick Ross"
              img="src/home/assets/img/plam.jpeg"
            />
          </div>
          <SocialMedia /> {/*Hacerlo funcional*/}
          {/*Agregar créditos*/}
        </div>
      </div>

      <FloatButton url="https://www.instagram.com/luisrrleal"/> {/*Hacerlo funcional*/}
    </div>
  );
};
