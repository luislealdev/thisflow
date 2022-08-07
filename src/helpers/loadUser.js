import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadUser = async (displayName = "") => { //Cambie uid="" por displayName=""

  // if (!uid) throw new Error("El UID del usuario no existe");
  if (!displayName) throw new Error("El displayName del usuario no existe");

  // const collectionRef = doc(firebaseDB, `${uid}/info/`);
  const collectionRef = doc(firebaseDB, `${displayName}/info/`);


  const resp = await getDoc(collectionRef);

  const user = {
    ...resp.data(),
  };

  return user;
};
