import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Platforms = ({ appleMusicUrl = "", spotifyUrl = "" }) => {
  return (
    <div className="platforms">
      <a href={appleMusicUrl}>
        <FontAwesomeIcon size="4x" icon={faApple}></FontAwesomeIcon>
      </a>
      <a href={spotifyUrl}>
        <FontAwesomeIcon size="3x" icon={faSpotify} />
      </a>
    </div>
  );
};
