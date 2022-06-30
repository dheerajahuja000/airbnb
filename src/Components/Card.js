import React from "react";
import soldout from "../Images/soldout.png";



export default function Card({image,rating,reviewCount,country,title,price,openSpots}) {
 
  return (
    <div className="card">
    
      <img src={`../Images/${image}`}  className="card-image" />
      {openSpots===0 && <img src={soldout} className="sold-out-img"/>} 
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
