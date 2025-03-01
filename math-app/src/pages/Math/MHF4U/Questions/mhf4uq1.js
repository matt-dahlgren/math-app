import React from "react";
import { Link } from "react-router-dom";
import "../../../style.css";
import QuizComponent from "./QuizComponent";

function SumsQOne() {
  
    return (
      <div> 
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="dropdown">
            <Link className="dItem" to="/mhf4u/sums">Back</Link>
        </div>
      </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
      <h1>Q1: Match the Equation to the Graph</h1>
        <p>
            Beside the graphs, put the name (in lowercase) of the equation you believe made that graph!
        </p>
        <div>
            <QuizComponent />
        </div>
    
      </div>
    </div>
    );
}

export default SumsQOne;
