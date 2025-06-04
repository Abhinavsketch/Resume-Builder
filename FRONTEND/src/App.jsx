import "./App.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/resume/resume";
import { UserContext } from "./context/userInfo";
import { useContext } from "react";

const App = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);
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
