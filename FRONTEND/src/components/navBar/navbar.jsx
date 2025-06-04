import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="intro">
        <h2>Built-It</h2>
      </div>
      <div className="build-btns">
        <Link to="/resume">
          <button className="resume">Resume</button>
        </Link>
        <button className="score">Score</button>
      </div>
    </div>
  );
};

export default Navbar;
