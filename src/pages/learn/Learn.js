import React from "react";
import { Link } from "react-router-dom";
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
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolorum expedita consequuntur ipsum voluptates provident labore
            eaque vitae! Ut maiores ullam dolor nihil laboriosam, ducimus
            libero, aspernatur repellendus alias assumenda labore nostrum illo
            itaque fuga doloribus dolorum minus sequi quaerat. Quasi, hic?
            Ipsum, debitis nam voluptate unde ducimus commodi? Incidunt a
            temporibus nulla quos iure aspernatur inventore?
          </p>
          <br />
          <br />
          <button className="gotoshop">
            <Link className="learnLink" to={"/ThankYou"}>
              SHOP NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
