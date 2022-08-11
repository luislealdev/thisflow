export const GridImages = ({ photos=[] }) => {
  return (
    <div className="gridImages">
    {photos.map((photo)=>(
        <div>
        <img src={photo}/>
      </div>
    ))}
    </div>
  );
};
