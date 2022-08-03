import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AvatarImg, FloatButton, ImageGallery } from "../../home/components";
import { DescriptionUserText } from "../../home/components/DescriptionUserText";
import MediaControlCard from "../../home/components/MediaControlCard";
import { SocialMedia } from "../../home/components/SocialMedia";
import SaveIcon from "@mui/icons-material/Save";
import "../../home/components/styles.css";
import { useSelector } from "react-redux";

export const HomePage = () => {

  const {displayName} = useSelector((state) => state.auth); 

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="bg-principal cool ">
          <div className="bg-secondary mt-5 padding-2 not-margin-top border-radius center">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ m: 2 }}
            >
              <Grid item xs={4}>
                <Button color="secondary">
                  <SaveIcon />
                  Guardar
                </Button>
              </Grid>
            </Grid>

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
              <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="Enter username"
                  label="Username"
                  sx={{ border: "none", mb: 1, mt: 2 }}
                  name="title"
                  // value={title}
                  // onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
              <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="Enter username"
                  label="Username"
                  sx={{ border: "none", mb: 1, mt: 2 }}
                  name="title"
                  // value={title}
                  // onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="Enter username"
                  label="Username"
                  sx={{ border: "none", mb: 1, mt: 2 }}
                  name="title"
                  // value={title}
                  // onChange={onInputChange}
                />
              </Grid>
            </Grid>

            <ImageGallery />

            <div className="songs">
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

            <SocialMedia />
          </div>
        </div>

        <FloatButton />
      </div>
    </>
  );
};
