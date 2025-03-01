import { Routes, Route, Link } from "react-router-dom";
import './App.css';

// import general pages
import Home from "./pages/Home/Home";

// import class pages, divided by subject, descending by grade

// Math
import IntroductionToFunctions from "./pages/Math/MCR3U/mcr3u_landing";
import CalculusAndVecotrs from "./pages/Math/MCV4U/mcv4u_landing";
import AdvancedFunctions from "./pages/Math/MHF4U/mhf4u_landing";


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
        <Route path="/math/mcr3u" element={<IntroductionToFunctions />} />

        {/* Grade Twelve */}
        <Route path="/math/mcv4u" element={<CalculusAndVecotrs />} />
        <Route path="/math/mhf4u" element={<AdvancedFunctions />} />

      </Routes>

    </div>
  );
}

export default App;
