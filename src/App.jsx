import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HighTechAnimePage from "./pages/HighTechAnimePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/high-tech-anime" element={<HighTechAnimePage />} />
      </Routes>
    </Router>
  );
}

export default App;
