import { doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { loadUser } from "../../helpers/loadUser";
import { setSaving,setUser,updatedUser } from "./flowSlice";

export const startLoadingUser = () => {
    return async (dispatch, getState) => {
      const { uid } = getState().auth;
      if (!uid) throw new Error("El UID del usuario no existe");
      const user = await loadUser(uid);
      dispatch(setUser(user));
    };
  };

export const startSavingInfo = () => {
    return async (dispatch, getState) => {
      dispatch(setSaving());
      const { uid } = getState().auth;
      const { activeUser } = getState().flow;

      const userToFirestore = { ...activeUser };
      delete userToFirestore.id;
  
      const userRef = doc(firebaseDB, `${uid}/info/`);
      await setDoc(userRef, userToFirestore, { merge: true });
      dispatch(updatedUser(activeUser));
    };
  };
