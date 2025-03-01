import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css"

function Home() {
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

    {/* Home Container */}
    <div id="homeContainer" className="container"></div>
  </div>
  );
}

export default Home;
