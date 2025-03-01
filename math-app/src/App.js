import { Routes, Route } from "react-router-dom";
import './App.css';

// import general pages
import Home from "./pages/Home/Home";

// import class pages, divided by subject, descending by grade

// Math
import IntroductionToFunctions from "./pages/Math/MCR3U/mcr3u_landing";
import Sinusoidals from "./pages/Math/MCR3U/sinusodal_terms";
import SinQuestionOne from "./pages/Math/MCR3U/Questions/mcr3uq1";

import CalculusAndVecotrs from "./pages/Math/MCV4U/mcv4u_landing";
import Derivatives from "./pages/Math/MCV4U/derivatives";
import DerivsQuestionOne from "./pages/Math/MCV4U/Questions/mcv4uq1";

import AdvancedFunctions from "./pages/Math/MHF4U/mhf4u_landing";
import FunctionSums from "./pages/Math/MHF4U/sums";
import SumQuestionOne from "./pages/Math/MHF4U/Questions/mhf4uq1";


function App() {
  return (
    <div className="App">
      <nav> 
      </nav>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />

        {/* Math */}

        {/* Grade Eleven */}
        <Route path="/mcr3u" element={<IntroductionToFunctions />} />
        <Route path="/mcr3u/sins" element={<Sinusoidals />} />
        <Route path="/mcr3u/sins/q1" element={<SinQuestionOne />} />

        {/* MCR3U to other classes */}
        
        {/* Grade Twelve */}
        <Route path="/mcv4u" element={<CalculusAndVecotrs />} />
        <Route path="/mcv4u/derivatives" element={<Derivatives />} />
        <Route path="/mcv4u/derivatives/q1" element={<DerivsQuestionOne/> } />

        <Route path="/mhf4u" element={<AdvancedFunctions />} />
        <Route path="/mhf4u/sums" element={<FunctionSums />} />
        <Route path="/mhf4u/sums/q1" element={<SumQuestionOne />} />

      </Routes>

    </div>
  );
}

export default App;
