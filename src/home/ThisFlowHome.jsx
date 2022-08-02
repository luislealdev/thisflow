import React from "react";
import {
  Donations,
  FloatButton,
  ImageGallery,
  NavBar,
  InitialInfo,
} from "./components";
import MediaControlCard from "./components/MediaControlCard";
import "../home/components/styles.css";

export const ThisFlowHome = () => {
  return (
    <>
      <NavBar />
      <InitialInfo />
      <div className="bg">
      <h5>Create your <span>own gallery</span></h5>
      <ImageGallery />
      <h5>Let your fans play your music from the website </h5>
      <MediaControlCard />
      <h5>Add yout social media</h5>

      <h6>Help us to be better!</h6>
      <Donations />
      </div>

      <FloatButton />

    </>
  );
};
