import React from "react";
import cardimg from "../Images/cardimg.png";
import soldout from "../Images/soldout.png"



export default function Card({image,rating,reviewCount,country,title,price}) {
    
  return (
    <div className="card">
    
      <img src={require('../Images/cardimg.png')}  className="card-image" />
      <img src={soldout} className="sold-out-img"/>
      <p className="card-image-rating">
        <strong>😀 {rating}</strong>
        <span className="grey"> ({reviewCount}) {country}</span>
      </p>
      <p className="card-desc">{title}</p>
      <p className="card-price">
        <strong>From ${price}</strong>
        /person
      </p>
    </div>
  );
}
