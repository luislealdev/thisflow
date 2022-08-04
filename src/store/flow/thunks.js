import { doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { setSaving,updatedUser } from "./flowSlice";

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