import React from "react";
import { Link } from "react-router-dom";
import "../../../style.css";
import TrueFalse from "./TrueFalse";


function SinusoidalsQOne() {
  
    return (
      <div> 
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="dropdown">
            <Link className="dItem" to="/mcr3u/sins">Back</Link>
        </div>
      </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
        <h1>Q1: Sinusoidal Term Multiple Choice! </h1>
        <TrueFalse sen="A period entails a full cycle, 
        whereas the amplitude dictates the height of the peaks of a sinusoidal function." />

      </div>
    </div>
    );
}

export default SinusoidalsQOne;
