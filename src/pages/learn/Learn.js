import React from "react";
import "./learn.css";
import { useParams, useLocation } from "react-router-dom";

const Learn = () => {
  // const { id } = useParams();
  const { modelName, bodyType, modelType, imageUrl } = useLocation().state.car;

  return (
    <div className="LearnModel">
      <div className="learnHeading">
        <h1 className="bodyType">{bodyType}</h1>
        <h1 className="modelName">{modelName}</h1>
        <h1 className="modelType">{modelType}</h1>
      </div>

      <div className="img">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Learn;
