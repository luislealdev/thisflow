import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { loadUser } from "../../helpers/loadUser";
import { startLoadingUsername } from "../../store/flow";

export const UserPage = () => {
  const { username, ...others } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingUsername(username));
  }, [username])
  

  // const user = undefined;

  if (username === undefined) {
    return <Navigate to="/home" />;
  }

  return <div>UserPage</div>;
};
