import React from "react";
import "./card.css";

const card = ({ car }) => {
  const { id, modelName, bodyType, modelType, imageUrl } = car;
  return (
    <div>
      <div className="card-headings">
        <h2 className="brand">{bodyType}</h2>
        <div className="headings2">
          <h3 className="model">{modelName}</h3>
          <h3 className="modelType">{modelType}</h3>
        </div>
      </div>
      <div className="cartImg">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-btn">
        <h3 className="btn">Learn &gt;</h3>
        <h3 className="btn">Shop &gt;</h3>
      </div>
    </div>
  );
};

export default card;
