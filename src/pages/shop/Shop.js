import React from "react";
import { Link } from "react-router-dom";
import "./shop.css";
import { useParams, useLocation } from "react-router-dom";

const Shop = () => {
  // const { id } = useParams();
  const { modelName, bodyType, modelType, imageUrl } = useLocation().state.car;

  return (
    <div className="shopModel">
      <div className="shopHeadings">
        <div>
          <h1 className="bodyType">{bodyType}</h1>
          <h1 className="modelName">{modelName}</h1>
          {/* <h1 className="modelType">{modelType}</h1> */}
        </div>
        <button className="gotoshop">
          <Link className="shopLink" to={"/ThankYou"}>
            SHOP NOW
          </Link>
        </button>
      </div>

      <div className="img">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Shop;
