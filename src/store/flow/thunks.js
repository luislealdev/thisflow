import { doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadUser } from "../../helpers/loadUser";
import { setProfileImage, setSaving, setUser, updatedUser } from "./flowSlice";

export const startLoadingUser = () => {
  return async (dispatch, getState) => {
    // const { uid } = getState().auth;
    // if (!uid) throw new Error("El UID del usuario no existe");
    // const user = await loadUser(uid);

    const { displayName } = getState().auth;
    if (!displayName) throw new Error("El username del usuario no existe");
    const user = await loadUser(displayName);

    dispatch(setUser(user));
  };
};

export const startLoadingUsername = (username) => {
  return async (dispatch, getState) => {
    if (!username) throw new Error("El username del usuario no existe");
    const user = await loadUser(username);

    dispatch(setUser(user));
  };
};

export const startSavingInfo = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    // const { uid } = getState().auth;
    const { displayName } = getState().auth;

    const { activeUser } = getState().flow;

    const userToFirestore = { ...activeUser };
    delete userToFirestore.id;

    const userRef = doc(firebaseDB, `${displayName}/info/`); //Cambie uid por displayName
    await setDoc(userRef, userToFirestore, { merge: true });
    dispatch(updatedUser(activeUser));
  };
};

export const startUploadingProfileImage = (files) => {
  return async (dispatch) => {
    dispatch(setSaving());

    const profileImageUrl = await fileUpload(files[0]);
    // const allFilesPromises = [];
    // for (const file of files) {
    //   allFilesPromises.push(fileUpload(file));
    // }

    // const photosUrls = await Promise.all(allFilesPromises);
    dispatch(setProfileImage(profileImageUrl));
  };
};
