import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import sumFun from "../../../resources/sum_of_functions.png";


function MHF_Landing() {
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
      <h1>MCHF4U: Advanced Functions</h1>
        <p align="left">
            In Advanced Functions, students will further develop their mathematical reasoning skills through more "advanced functions". The topics in this course is the last peice of preparation
            for student's introduction to Calculus. Meaning that a not just being able to complete problems in this course is important, but also being able to 
            explain the processes that they're conducting. That is why in the following modules, questions will be more targeted towards showing comprehension 
            and students will be encouraged to take the time and use the tools given in the modules to deepen their understanding on subjects such as:
            <ul>
            <li>Investigating polynomial, rational, logarithmic and trigonometric functions.</li>
            <li>Rate of change.</li>
            <li>Characteristics of Functions.</li>
            </ul>
            In the following modules we will help you in your preparation for your high school math finale!
        </p>

        <Link className="subject-bar" to="/mhf4u/sums">
            <img src={sumFun} alt="" />
            <div className="text">
                <h2>Sum of Functions</h2>
            </div>
        </Link>
      </div>
    </div>
    );
}

export default MHF_Landing;