import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

export const UserPage = () => {

  const { username, ...others } = useParams();

  // const user = useMemo(()=>getHeroById(id), [id]) ;

  const user = undefined;

  if (user === undefined) {
    return <Navigate to="/home" />;
  }

  return (
    <div>UserPage</div>
  )
}
