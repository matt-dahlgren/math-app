import React from "react";
import { Link } from "react-router-dom";
import "../../../style.css";


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
      <h1>Q1</h1>
        <p align="left">
            Intuition: Imagine making a mark on a car tire (assuming the tire is a perfect circle),
             how would you graph the distance of the mark from the ground over some amount of time? Also, is there 
             a maximum value we would see, and would this maximum value be unique?
        </p>

        <p align="left">
            The answer is that we use sin(x) and cos(x) to model these kind of circular problems. Something special
            about sine and cosine are that they are cyclical. From every 2pi the cycle restarts. That is for any x, 
        </p>

        <p>
            sin(x - 2pi) = sin(x) = sin(x + 2pi)
        </p>

        <p align="left">
            and similarily for cosine. When observing the graphs that these functions make, there are two more defining features.
            <l>
                <li>The Amplitude</li>
                <li>Period (and its inverse the Frequency)</li>
            </l>
        </p>

        <h3>Amplitude</h3>
        <p align="left">
            Imagine, we mark two cars now. One with larger tires than the other. It is reasonable to say that the 
            car with the taller tires will have higher peaks on its graph than the car with the smaller tires. The Amplitude
            is the height of these peaks.
        </p>

        <h3>Period</h3>
        <p align="left">
            Now imagine both cars have the same size tires but one car is driving much faster than the other. Think about how much faster the mark on the tire will
            reach its peak height from the ground than a car driving slower. The time it takes for the mark to make one complete revolution 
            is considered the period.
        </p>

      </div>
    </div>
    );
}

export default SumsQOne;
