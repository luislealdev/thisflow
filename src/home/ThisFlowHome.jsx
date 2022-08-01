import React from "react";
import { FloatButton, ImageGallery, NavBar } from "./components";
import MediaControlCard from "./components/MediaControlCard";

export const ThisFlowHome = () => {
  return (
    <>
      <NavBar />
      <ImageGallery />
      <MediaControlCard/>
      <FloatButton />
    </>
  );
};
