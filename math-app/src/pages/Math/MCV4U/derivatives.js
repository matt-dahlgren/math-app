import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";


function Derivatives() {
  
    return (
      <div> 
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="dropdown">
            <Link className="dItem" to="/mcv4u">Back</Link>
        </div>
      </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
      <h1>Functionality of the First and Second Derivatives</h1>
        <p align="left">
            Intuition: Imagine you are starting off the blocks in a 200m dash. At any moment is your current speed the only factor in you winning?
            Probably not, you still need to keep running. Many top runners have a faster second half of their race than their first. We also barely ever actually 
            talk about speed when talking about running, swimming, driving, or rowing. We say that the athlete is moving at some speed per unit of time. Or some form of rate of change...
        </p>

        <p align="left">
            Most often we only concern ourselves with two rates:
            <ul>
                <li>Velocity (e.g.: metres per second)</li>
                <li>Accelleration</li>
            </ul>
        </p>

        <p align="left">
            If velocity denotes the change of distance over some amount of time. Accelleration denotes the rate at which velocity is changing. 
            Or the runner acclerates from their first 100m into their second 100m as there is an increase of velocity. In the next page you will be tasked with finding the 
            acceleration and velocity of a runner's position from the start line modelled by a quadratic equation. 
        </p>
      </div>
    </div>
    );
}

export default Derivatives;