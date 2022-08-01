import React from "react";
import { Donations, FloatButton, ImageGallery, NavBar, InitialInfo } from "./components";
import MediaControlCard from "./components/MediaControlCard";

export const ThisFlowHome = () => {
  return (
    <>
      <NavBar />
      <InitialInfo/>
      <ImageGallery />
      <MediaControlCard/>
      <FloatButton />
      <Donations/>
    </>
  );
};
