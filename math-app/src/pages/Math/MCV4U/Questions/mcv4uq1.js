import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../style.css";
import "./question_style.css"


function DerivativesQOne() {
  
  const [acceleration, setAcceleration] = useState(""); 
  const [velocity, setVelocity] = useState(""); 

  const correctAnswerVelocity = 1.6;
  const correctAnswerAcceleration = -1.2; 

  const isVCorrect = parseFloat(velocity) === correctAnswerVelocity;
  const isACorrect = parseFloat(acceleration) === correctAnswerAcceleration;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
    script.async = true;
    script.onload = function() {
      const elt = document.getElementById('calculator');
      const calculator = window.Desmos.GraphingCalculator(elt);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div> 
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="dropdown">
            <Link className="dItem" to="/mcv4u/derivatives">Back</Link>
        </div>
      </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
        <div className="content-wrapper">
          <div className="left-column">
            <h1>Determine Velocity and Acceleration</h1>
            <p align="left">In the first box type the acceleration of the runner based on the model. In the second box
                find the runner's velocity at x = 2:</p>
            <input
              type="text"
              placeholder="Acceleration"
              id="acceleration"
              value={acceleration}
              onChange={(e) => setAcceleration(e.target.value)}
              style={{
                borderColor: isACorrect ? 'green' : '#ccc',
                backgroundColor: isACorrect ? '#e0ffe0' : 'white',
              }}
            />
            <input
              type="text"
              placeholder="velocity at x = 2"
              id="velocity"
              value={velocity}
              onChange={(e) => setVelocity(e.target.value)}
              style={{
                borderColor: isVCorrect ? 'green' : '#ccc',
                backgroundColor: isVCorrect ? '#e0ffe0' : 'white',
              }}
            />
          </div>

          <div className="right-column">
            <div id="calculator" style={{ width: "400px", height: "400px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DerivativesQOne;
