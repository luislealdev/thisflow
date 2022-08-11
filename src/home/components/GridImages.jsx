export const GridImages = ({ photos = [] }) => {
  return (
    <div className="gridImages">
      {photos.map((photo) => (
        <div key={photo}>
          <img src={photo} />
        </div>
      ))}
    </div>
  );
};
