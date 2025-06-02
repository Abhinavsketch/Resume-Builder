import "./App.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/resume";

const App = () => {
  <Routes>
    <Route path="/resume" element={<Resume />} />
  </Routes>;
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
