import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css"
import sinGif from "../../../resources/sin.gif";

function MCR_Landing() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [grade11Open, setGrade11Open] = useState(false);
    const [grade12Open, setGrade12Open] = useState(false);
  
    return (
        <div> 
        {/* Navigation Bar */}
        <div className="navbar">
          <div className="dropdown">
              <Link className="dItem" to="/">Home</Link>
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="dropdown-btn">
              <a href="#math">Math</a>
            </div>
    
            {dropdownOpen && (
              <div className="dropdown-one">
                {/* Grade 11 Dropdown */}
                <div
                  className="dItem"
                  onMouseEnter={() => setGrade11Open(true)}
                  onMouseLeave={() => setGrade11Open(false)}
                >
                  Grade 11
                  {grade11Open && (
                    <div className="dropdown-two">
                    <Link className="dItem" to="/mcr3u">Introduction to Functions
                    </Link>
                  </div>
                  )}
                </div>
                {/* Grade 12 Dropdown */}
                <div
                  className="dItem"
                  onMouseEnter={() => setGrade12Open(true)}
                  onMouseLeave={() => setGrade12Open(false)}
                >
                  Grade 12
                  {grade12Open && (
                    <div className="dropdown-two">
                      <Link className="dItem" to="/mhf4u">Advanced Functions</Link>
                      <Link className="dItem" to="/mcv4u">Calculus and Vectors</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
      <h1>MCR3U: Introduction to Functions</h1>
        <p align="left">
            In grade eleven, students are introduced to a volley of new mathematical concepts which can definitely be overwhelming. Our job is to develop your intuition on equations (now called functions) using a variety of mathematical tools. We are going to be representing these functions:
            <ul>
            <li>Graphically</li>
            <li>Algebraically</li>
            <li>Numerically</li>
            </ul>
            After completing this course you will be able to:
            <ul>
            <li>Inverse a function -- and determine whether or not it results in another function.</li>
            <li>Investigate polynomial, and trigonometric functions.</li>
            <li>Utilize logarithmic and trigonometric laws to solve equations.</li>
            </ul>
            In the following modules we will help you in your academic transition from y to f(x)!
        </p>

        <Link className="subject-bar" to="/mcr3u/sins">
            <img src={sinGif} alt="" />
            <div className="text">
                <h2>Sinusoidal Functions</h2>
            </div>
        </Link>
      </div>
    </div>
    );
}

export default MCR_Landing;
