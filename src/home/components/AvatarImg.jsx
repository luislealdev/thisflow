import { Avatar } from "@mui/material";

export const AvatarImg = ({src=""}) => {
  return (
    <Avatar
      alt="Skrillex"
      src={src}
      sx={{
        width: "30vh",
        height: "30vh",
      }}
    />
  );
};
// src/home/assets/img/skrillex.jpeg