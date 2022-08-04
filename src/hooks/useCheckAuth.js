import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingUser } from "../store/flow";
// import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage: "" }));

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));

      dispatch(startLoadingUser(uid));
    });
  }, []);

  return { status };
};
