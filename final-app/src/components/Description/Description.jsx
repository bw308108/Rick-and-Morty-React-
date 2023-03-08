import React from "react";
import './Description.css'


const Description = ({ info }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={info.image} alt="" />
        </div>
        <div className="card-back">
        <h1>{info.name}</h1>
        <ul>
          <li>
            <strong>Status:</strong> {info.status}
          </li>
          <li>
            <strong>Species:</strong> {info.species}
          </li>
          <li>
            <strong>Gender:</strong> {info.gender}
          </li>
          <li>
            <strong>Origin:</strong> {info.location.name}
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
