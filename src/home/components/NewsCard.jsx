import React from "react";

export const NewsCard = ({
  lastNewTitle = "",
  lastNewText = "",
  lastNewImage = "",
}) => {
  if (!lastNewTitle == "" && !lastNewText == "" && !lastNewImage == "") {
    return (
      <div className="newsCard">
        <img src={lastNewImage} />
        <h4>{lastNewTitle}</h4>
        <p>{lastNewText}</p>
      </div>
    );
  }
};
