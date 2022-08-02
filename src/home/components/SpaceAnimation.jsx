import * as React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";

export const SpaceAnimation = () => {
  return (
    <Player
        className='spaceAnimation'
          autoplay
          loop
          src='https://assets6.lottiefiles.com/packages/lf20_euaveaxu.json'
          background="transparent"
          speed="1"
          style={{ height: "500px", width: "500px"}}
        />
  )
}
