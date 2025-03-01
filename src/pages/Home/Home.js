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
    <div id="homeContainer" className="container">
      <div>
        <h2>Welcome!</h2>
        <p>Hello my name is Matthew Dahlgren and this is my (under development) math learning app! Currenlty you can browse through
          3 Ontarian High School Math courses (Introductoin to Functions, Advanced Functions, and Calculus & Vectors). Each course has a
          synopsis of what the Government of Ontario says should be covered, along with one mini lesson. Each mini lesson has one question to 
          go along with it! 
        </p>

        <p>You can navigate through classes with the navigation bar at the top of the page! Just hover over Math (and hopefully Chemistry and Physics
          in the future!), and find the grade you want to learn in -- and then the class! </p>
      </div>
    </div>
  </div>
  );
}

export default Home;
