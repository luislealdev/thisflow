import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { startLoadingUsername } from "../../store/flow";
import { Loading } from "../../ui/components/Loading";

export const UserPage = () => {
  const { username, ...others } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingUsername(username));
  }, [username]);

  const { isLoading, activeUser } = useSelector((state) => state.flow);

  if (isLoading == false) {
    return activeUser.displayName != null ? (
      <h1>{activeUser.displayName}</h1>
    ) : (
      <Navigate to="/home" />
    );
  } else {
    return <Loading />;
  }
};
