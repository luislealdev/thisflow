import { Button, Grid, IconButton, TextField } from "@mui/material";
import {
  AvatarImg,
  Credits,
  FloatButton,
  ImageGallery,
} from "../../home/components";
import SaveIcon from "@mui/icons-material/Save";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../home/components/styles.css";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { startLogoutFirebase } from "../../store/auth/thunks";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  startSavingInfo,
  setActiveUser,
  startUploadingProfileImage,
  deleteGaleryPhotos,
  startUploadingImages,
  startUploadingLastNewImage,
} from "../../store/flow";
import { useEffect, useRef } from "react";
import { GridImages } from "../../home/components/GridImages";

export const HomePage = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    return dispatch(startLogoutFirebase());
  };

  const onSaveInfo = () => {
    dispatch(startSavingInfo());
  };

  const { isSaving, savedMessage, activeUser } = useSelector(
    (state) => state.flow
  );

  const {
    displayName,
    phrase,
    photos,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
    appleMusicUrl,
    spotifyUrl,
    lastNewTitle,
    lastNewText,
    lastNewImage,
    youtubeVideo1,
    youtubeVideo2,
    youtubeVideo3,
    onInputChange,
    formState,
  } = useForm(activeUser);

  useEffect(() => {
    dispatch(setActiveUser(formState));
  }, [formState]);

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire("Profile updated", savedMessage, "success");
    }
  }, [savedMessage]);

  const inputUploadImageRef = useRef();

  const onFileInputChange = ({ target }) => {
    if (target.files == 0) return;
    dispatch(startUploadingProfileImage(target.files));
  };

  const inputUploadImagesRef = useRef();

  const onFilesInputChange = ({ target }) => {
    if (target.files == 0) return;
    dispatch(startUploadingImages(target.files));
  };

  const inputLastNewImageRef = useRef();

  const onLastNewImageChange = ({ target }) => {
    if (target.files == 0) return;
    dispatch(startUploadingLastNewImage(target.files));
  };

  const onDeleteGaleryImages = () => {
    dispatch(deleteGaleryPhotos());
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
              sx={{ mb: 2 }}
            >
              <Grid item xs={4}>
                <Button
                  color="secondary"
                  onClick={onSaveInfo}
                  disabled={isSaving}
                >
                  <SaveIcon />
                  Save
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  color="secondary"
                  onClick={onLogout}
                  disabled={isSaving}
                >
                  <LogoutIcon />
                </Button>
              </Grid>
            </Grid>
            <h6>Remember to save the changes before logging out.</h6>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <input
                type="file"
                onChange={onFileInputChange}
                ref={inputUploadImageRef}
                style={{ display: "none" }}
              />
              <Grid>
                <AvatarImg src={activeUser.profilePicture} />
                <Button
                  onClick={() => {
                    inputUploadImageRef.current.click();
                  }}
                >
                  Change image
                </Button>
              </Grid>
              <h3 className="monospace">Personal info</h3>
              <hr />
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="Skrillex Tomorrowland"
                  label="Name"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  multiline
                  fullWidth
                  placeholder="Life is good..."
                  label="Phrase"
                  sx={{ border: "none", mb: 1, mt: 2, width: "70vw" }}
                  minRows={3}
                  name="phrase"
                  value={phrase}
                  onChange={onInputChange}
                />
              </Grid>
              <h3 className="monospace">Social info</h3>
              <hr />
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://instagram.com/..."
                  label="Instagram"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="instagramUrl"
                  value={instagramUrl}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://facebook.com/..."
                  label="Facebook"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="facebookUrl"
                  value={facebookUrl}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://youtube.com/..."
                  label="Youtube Chanel"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="youtubeUrl"
                  value={youtubeUrl}
                  onChange={onInputChange}
                />
              </Grid>
              <h3 className="monospace">Platforms info</h3>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://applemusic.com/..."
                  label="Apple Music"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="appleMusicUrl"
                  value={appleMusicUrl}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://spotify.com/..."
                  label="Spotify"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="spotifyUrl"
                  value={spotifyUrl}
                  onChange={onInputChange}
                />
                <h3 className="monospace">Last New</h3>
                <Grid item xs={3}>
                  <TextField
                    autoComplete="off"
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="My new song"
                    label="Title"
                    sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                    name="lastNewTitle"
                    value={lastNewTitle}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    autoComplete="off"
                    type="text"
                    variant="filled"
                    multiline
                    fullWidth
                    placeholder='Hey guys! Just release a new song called "my new song", im so happy...'
                    label="Text"
                    sx={{ border: "none", mb: 1, mt: 2, width: "70vw" }}
                    minRows={3}
                    name="lastNewText"
                    value={lastNewText}
                    onChange={onInputChange}
                  />
                </Grid>
                <h3 className="monospace">Youtube Videos</h3>
                <Grid item xs={3}>
                  <TextField
                    autoComplete="off"
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="https://youtube.com/..."
                    label="Youtube Video 1"
                    sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                    name="youtubeVideo1"
                    value={youtubeVideo1}
                    onChange={onInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    autoComplete="off"
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="https://youtube.com/..."
                    label="Youtube Video 2"
                    sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                    name="youtubeVideo2"
                    value={youtubeVideo2}
                    onChange={onInputChange}
                  />
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="filled"
                  fullWidth
                  placeholder="https://youtube.com/..."
                  label="Youtube Video 3"
                  sx={{ border: "none", mb: 1, mt: 1, width: "70vw" }}
                  name="youtubeVideo3"
                  value={youtubeVideo3}
                  onChange={onInputChange}
                />
              </Grid>

              <GridImages photos={photos} />

              <input
                type="file"
                onChange={onFilesInputChange}
                ref={inputUploadImagesRef}
                style={{ display: "none" }}
              />

              <Grid item xs={4}>
                <Button
                  color="secondary"
                  onClick={() => {
                    inputUploadImagesRef.current.click();
                  }}
                  disabled={isSaving}
                >
                  <CloudUploadIcon />
                </Button>
                <h3> Upload Images</h3>
                <h6>We recomend you just upload 3 images.</h6>
              </Grid>

              <Grid item xs={4}>
                <Button
                  color="secondary"
                  onClick={onDeleteGaleryImages}
                  disabled={isSaving}
                >
                  <DeleteIcon />
                </Button>
                <h3>Delete images</h3>
                <h6>
                  If you have a lot of pictures of you want to add new ones and
                  delete the others.
                </h6>
              </Grid>
            </Grid>
          </div>
        </div>

        <FloatButton src="" />
        <Credits />
      </div>
    </>
  );
};
