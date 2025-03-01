import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [grade11Open, setGrade11Open] = useState(false);
  const [grade12Open, setGrade12Open] = useState(false);

  return (
    <div> 
    {/* Navigation Bar */}
    <div className="navbar">
        <a href="#home">Home</a>
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
            >Grade 11</div>
            {/* Grade 12 Dropdown */}
            <div
              className="dItem"
              onMouseEnter={() => setGrade12Open(true)}
              onMouseLeave={() => setGrade12Open(false)}
            >
              Grade 12
              {grade12Open && (
                <div className="dropdown-two">
                  <div className="dItem">Advanced Functions</div>
                  <div className="dItem">Calculus and Vectors</div>
                  <div className="dItem">Data Management</div>
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
