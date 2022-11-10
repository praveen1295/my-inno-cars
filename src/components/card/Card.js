import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ car }) => {
  const { id, modelName, bodyType, modelType, imageUrl } = car;
  return (
    <div className=".card-body">
      <div className="card-headings">
        <h2 className="brand">{bodyType}</h2>
        <div className="cartHeadings">
          <h3 className="model">{modelName}</h3>
          <h3 className="modelType">{modelType}</h3>
        </div>
      </div>
      <div className="cartImg">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-btn">
        <Link
          className="btn"
          to={{
            pathname: `/learn/${id}`,
          }}
          state={{
            car: car,
          }}
        >
          Learn &gt;
        </Link>
        <Link
          className="btn"
          to={{
            pathname: `/shop/${id}`,
          }}
          state={{
            car: car,
          }}
        >
          Shop &gt;
        </Link>
      </div>
    </div>
  );
};

export default Card;
