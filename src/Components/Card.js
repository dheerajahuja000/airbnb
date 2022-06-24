import React from "react";
import cardimg from "../Images/cardimg.png";
import soldout from "../Images/soldout.png"

export default function Card() {
  return (
    <div className="card">
    
      <img src={cardimg} className="card-image" />
      <img src={soldout} className="sold-out-img"/>
      <p className="card-image-rating">
        <strong>😀 5.0 </strong>
        <span className="grey">(6) USA</span>
      </p>
      <p className="card-desc">Life lessons with Katie</p>
      <p className="card-price">
        <strong>From $136</strong>
        /person
      </p>
    </div>
  );
}
