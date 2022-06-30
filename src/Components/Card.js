import React from "react";
import soldout from "../Images/soldout.png";

export default function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <img src={`../Images/${props.coverImg}`} className="card-image" />
      {props.openSpots === 0 && <img src={soldout} className="sold-out-img" />}
      <p className="card-image-rating">
        <strong>😀 {props.stats.rating}</strong>
        <span className="grey">
          {" "}
          ({props.stats.reviewCount}) {props.location}
        </span>
      </p>
      <p className="card-desc">{props.title}</p>
      <p className="card-price">
        <strong>From ${props.price}</strong>
        /person
      </p>
    </div>
  );
}
