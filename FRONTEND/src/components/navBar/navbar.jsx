import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="intro">
        <h2>Built-It</h2>
      </div>
      <div className="build-btns">
        <button className="resume">Resume</button>
        <button className="score">Score</button>
      </div>
    </div>
  );
};

export default Navbar;
