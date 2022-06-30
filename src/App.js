import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
// import cardimg from "./Images/cardimg.png";



export default function App() {
    return (
        <div>
          <Navbar/>
          <Hero/>
          <Card image="cardimg.png" rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136}/>
        </div>
        
    )
}