import React from "react";
import {
  FloatButton,
  NavBar,
  InitialInfo,
  AvatarImg,
  Credits,
  GridImages,
} from "./components";
import "../home/components/styles.css";
import { DescriptionUserText } from "./components/DescriptionUserText";
import { Grid } from "@mui/material";
import { SocialMedia } from "./components/SocialMedia";
import { NewsCard } from "./components/NewsCard";
import { GridVideos } from "./components/GridVideos";
import { Platforms } from "./components/Platforms";

export const ThisFlowHome = () => {
  return (
    <>
      <NavBar />
      <div className="animate__animated animate__fadeIn">
        <InitialInfo />
        <div className="bg-principal cool ">
          <div className="bg-secondary margin-2 padding-2 not-margin-top not-margin-bottom border-radius center">
            <h5>
              Add a <span>profile picture</span> and <span>describe you</span>
            </h5>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3}>
                <AvatarImg src="https://i.discogs.com/8oZwwMydyiU_oGfEW44FG8hMn37boZUduFybDFE1Wi0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0NzI1/ODUtMTYxMjgxNTg4/My0yNjgwLmpwZWc.jpeg" />
              </Grid>

              <Grid item xs={3}>
                <DescriptionUserText
                  displayName="Skrillex"
                  phrase="I never set out to be part of a genre, because I listen to all types of music."
                />
              </Grid>
            </Grid>
            <h5>
              Share your <span>social media</span>
            </h5>
            <SocialMedia
              facebookUrl="https://www.facebook.com/skrillex"
              instagramUrl="https://www.youtube.com/channel/UC_TVqp_SyG6j5hG-xVRy95A"
              youtubeUrl="https://www.instagram.com/skrillex/"
            />
            <h5>
              Share <span>platforms</span> where your music is
            </h5>
            <Platforms />
            <h5>
              Add your <span>last new</span>
            </h5>
            <NewsCard
              lastNewTitle='My new song "Dont Go" is out now!'
              lastNewText="Skrillex, Justin Bieber & Don Toliver"
              lastNewImage="https://i0.wp.com/plus.cusica.com/wp-content/uploads/2021/08/justinbieberxskrillexxdontoliver.jpg?fit=2048%2C2048&ssl=1"
            />
            <h5>
              Create your <span>own gallery</span>
            </h5>
            <GridImages
              photos={[
                "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/12/03/1331763224318_2/skrillex-red-bull-20-before-16-edm.jpg.jpg",
                "https://www.clubbingspain.com/imagenes/Skrillex-2018.jpg",
                "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2013/03/06/1331582967322_1/skrillex-y-compa%C3%B1%C3%ADa-giran-los-platos.JPG",
              ]}
            />
            <h5>
              Let your fans <span>play your music</span> from the website
            </h5>

            <GridVideos
              youtubeVideo1="https://www.youtube.com/embed/YJVmu6yttiw"
              youtubeVideo2="https://www.youtube.com/embed/BGpzGu9Yp6Y"
              youtubeVideo3="https://www.youtube.com/embed/2cXDgFwE13g"
            />
          </div>
        </div>

        <FloatButton url="www.instagram.com/luisrrleal" />
      </div>
      <Credits />
    </>
  );
};
