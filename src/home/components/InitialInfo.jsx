import { SpaceAnimation } from "./SpaceAnimation";
import "./styles.css";

export const InitialInfo = () => {
  return (
    <>
      <div className="card">
      <div>
          <SpaceAnimation />
        </div>
        <div>
          <h1>THIS FLOW</h1>
          <p>Your personal artist website</p>
        </div>
      </div>
    </>
  );
};
