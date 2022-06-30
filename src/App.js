import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((data) =>
      <Card
        key={data.id}
        {...data}
      />
    
  );
  console.log(cards);

 
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </div>
  );
}
