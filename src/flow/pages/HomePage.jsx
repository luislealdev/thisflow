import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AvatarImg, FloatButton, ImageGallery } from "../../home/components";
import { DescriptionUserText } from "../../home/components/DescriptionUserText";
import MediaControlCard from "../../home/components/MediaControlCard";
import { SocialMedia } from "../../home/components/SocialMedia";
import SaveIcon from "@mui/icons-material/Save";
import "../../home/components/styles.css";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { startLogoutFirebase } from "../../store/auth/thunks";

export const HomePage = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    return dispatch(startLogoutFirebase());
  };

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
                  Guardar cambios
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button color="secondary" onClick={onLogout}>
                  <LogoutIcon />
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
              <Grid>
                <AvatarImg />
                <Button>Change image</Button>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="Skrillex Tomorrowland"
                  label="Name"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
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
                  placeholder="Skrillex"
                  label="Username"
                  sx={{ border: "none", mb: 1, mt: 2, width: "70vw" }}
                  name="title"
                  // value={title}
                  // onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  variant="filled"
                  multiline
                  fullWidth
                  placeholder="Life is good..."
                  label="Phrase"
                  sx={{ border: "none", mb: 1, mt: 2, width: "70vw" }}
                  minRows={3}
                  name="title"
                  // value={title}
                  // onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={4}>
                <IconButton color="secondary">
                  <CloudUploadIcon />
                </IconButton>
              </Grid>
              Upload images
            </Grid>

            {/* <ImageGallery /> */}

            {/* <div className="songs">
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
            </div> */}
          </div>
        </div>

        <FloatButton />
      </div>
    </>
  );
};
