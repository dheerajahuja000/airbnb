import React from "react";
import heroImg from "../Images/Group.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img src={heroImg} width="80%" className="heroImage" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
