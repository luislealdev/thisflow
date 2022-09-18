export const GridVideos = ({ youtubeVideo1, youtubeVideo2, youtubeVideo3 }) => {
  const videos = {
    video1: "",
    video2: "",
    video3: "",
  };

  if (youtubeVideo1.includes("=")) {
    youtubeVideo1 = youtubeVideo1.split("=");
    videos.video1 = "https://www.youtube.com/embed/" + youtubeVideo1[1];
  } else if (youtubeVideo1.includes(".be/")) {
    youtubeVideo1 = youtubeVideo1.split(".be/");
    videos.video1 = "https://www.youtube.com/embed/" + youtubeVideo1[1];
  }

  if (youtubeVideo2.includes("=")) {
    youtubeVideo2 = youtubeVideo2.split("=");
    videos.video2 = "https://www.youtube.com/embed/" + youtubeVideo2[1];
  } else if (youtubeVideo2.includes(".be/")) {
    youtubeVideo2 = youtubeVideo2.split(".be/");
    videos.video2 = "https://www.youtube.com/embed/" + youtubeVideo2[1];
  }

  if (youtubeVideo3.includes("=")) {
    youtubeVideo3 = youtubeVideo3.split("=");
    videos.video3 = "https://www.youtube.com/embed/" + youtubeVideo3[1];
  } else if (youtubeVideo3.includes(".be/")) {
    youtubeVideo3 = youtubeVideo3.split(".be/");
    videos.video3 = "https://www.youtube.com/embed/" + youtubeVideo3[1];
  }

  return (
    <div className="gridImages">
      <div>
        <iframe
          width="560"
          height="315"
          src={videos.video1}
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
          src={videos.video2}
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
          src={videos.video3}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
