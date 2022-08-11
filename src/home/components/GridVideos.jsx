import React from "react";

export const GridVideos = ({ youtubeVideo1, youtubeVideo2, youtubeVideo3 }) => {
  return (
    <div className="gridImages">
      <div>
        <iframe
          width="560"
          height="315"
          src={youtubeVideo1}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={youtubeVideo2}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={youtubeVideo3}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
