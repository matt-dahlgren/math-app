import React, { useState } from "react";
import { Link } from "react-router-dom";
import runner from "../../../resources/accelleration.png";
import "../../style.css";

function MCV_Landing() {
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
      <h1>MCV4U: Calculus and Vectors</h1>
        <p align="left">
            In your final Mathematics course in an Ontario high school, you are being given the foundations of two very large subtopics in math; Calculus and Linear Algebra.
            While both can be daunting, the goal of the following modules are to break down each topic into many small non-intimidating modules. While you do have access to
            calculator, the questions in this module have been defined in such a way that it would benifit you to write on pen and paper while solving the module questions -- 
            as to better prepare for test taking in University level stem courses. In the following modules you will learn about:
            <ul>
            <li>The Derivative.</li>
            <li>Applications of the first to nth derivative.</li>
            <li>Differentiation Strategies.</li>
            <li>What is a Vector?</li>
            <li>The Dot Product.</li>
            <li>The Cross Product.</li>
            </ul>
            After completing this course you will be able to:
            <ul>
            <li>Take the derivative of continuous functions.</li>
            <li>Determine vectors and preform calculations with them.</li>
            <li>Optimize single vairable functions.</li>
            </ul>
        </p>

        <div className="subject-bar">
            <img src={runner} alt="" />
            <div className="text">
                <h2>Sinusoidal Functions</h2>
            </div>
        </div>
      </div>
    </div>
    );
}

export default MCV_Landing;
