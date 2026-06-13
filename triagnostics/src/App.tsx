import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Landing } from "./pages/Landing";
import { Connect } from "./pages/Connect";
import { Quiz } from "./pages/Quiz";
import { Analyzing } from "./pages/Analyzing";
import { Results } from "./pages/Results";
import { Science } from "./pages/Science";
import { Progress } from "./pages/Progress";
import { Rewards } from "./pages/Rewards";
import { Premium } from "./pages/Premium";
import { Bonus } from "./pages/Bonus";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/analyzing" element={<Analyzing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/science" element={<Science />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/bonus" element={<Bonus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
