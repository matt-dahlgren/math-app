import { Routes, Route } from "react-router-dom";
import './App.css';

// import general pages
import Home from "./pages/Home/Home";

// import class pages, divided by subject, descending by grade

// Math

import Mathematics from "./pages/Math/math_landing"

import IntroductionToFunctions from "./pages/Math/MCR3U/mcr3u_landing";
import Sinusoidals from "./pages/Math/MCR3U/sinusodal_terms";

import CalculusAndVecotrs from "./pages/Math/MCV4U/mcv4u_landing";
import Derivatives from "./pages/Math/MCV4U/derivatives";

import AdvancedFunctions from "./pages/Math/MHF4U/mhf4u_landing";
import FunctionSums from "./pages/Math/MHF4U/sums";


function App() {
  return (
    <div className="App">
      <nav> 
      </nav>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />

        {/* Math */}
        <Route path="/math" element={<Mathematics />} />

        {/* Grade Eleven */}
        <Route path="/mcr3u" element={<IntroductionToFunctions />} />
        <Route path="/mcr3u/sins" element={<Sinusoidals />} />

        {/* MCR3U to other classes */}
        
        {/* Grade Twelve */}
        <Route path="/mcv4u" element={<CalculusAndVecotrs />} />
        <Route path="/mcv4u/derivatives" element={<Derivatives />} />

        <Route path="/mhf4u" element={<AdvancedFunctions />} />
        <Route path="/mhf4u/sums" element={<FunctionSums />} />

      </Routes>

    </div>
  );
}

export default App;
