import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadUser = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionRef = doc(firebaseDB, `${uid}/info/`);
  const resp = await getDoc(collectionRef);

  const user = {
    ...resp.data(),
  };
  
  return user;
};
