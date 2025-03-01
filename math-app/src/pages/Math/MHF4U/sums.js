import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";


function Sums() {
  
    return (
      <div> 
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="dropdown">
            <Link className="dItem" to="/mhf4u">Back</Link>
        </div>
      </div>
  
      {/* Content Container */}
      <div id="homeContainer" className="container">
      <h1>Sum of Functions</h1>
        <p align="left">
            Intuition: A continuous function is an infinite set (or "list") of coordinates. When we add two functions
            we add the y-coordinates of equal x-coordinates. Or:
        </p>

        <p>
            (x,y) + (x, z) = (x, y + z)
        </p>

        <p align="left">
            So when we add two functions together, we are essentially adding the y-coordinates at every x value.
            Or we are adding the output of each x for two functions f(x) and g(x) toghether and pairing it to some new
            function h(x) = f(x) + g(x). But, what does h look like? Consider:
        </p>

        <p>
            g(x) = 2,
            f(x) = -2
        </p>

        <p align="left">
            While this seems like an unnecessaryily simple example, it demonstrates the only real idea. At every point x, g is mapped to 2 and f is mapped to -2.
            So at every single point
        </p>

        <p>
            h(x) = -2 + 2
        </p>
        <p>
            h(x) = 0
        </p>

        <p>
        In the next page you will be tasked with matching an equation to the picture of a graph. The best way to approach this is to try to break the graph into 
        patterns that you are familiar with. If you can't decide on the right answer, maybe try eliminating wrong answers!
        </p>

        <h2 align="left">Question Bank</h2>
        <div>
            <Link to="/mhf4u/sums/q1">
                <p align="left">Question 1: Deduce the Summed Function!</p>
            </Link>
        </div>
      </div>
    </div>
    );
}

export default Sums;