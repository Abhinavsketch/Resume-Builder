import "./skills.css";
import { useState } from "react";

const Skill = () => {
  const [projects, setProject] = useState([1]);

  const addProject = () => {
    setProject([...projects, projects.length + 1]);
  };

  const deleteProject = () => {
    if (projects.length > 1) {
      setProject(projects.slice(0, -1));
    }
  };
  return (
    <div className="skillContainer">
      <input type="text" placeholder="Languages" />
      <input type="text" placeholder="Technologies" />
      {projects.map((proj, index) => {
        return (
          <div className="projectContainer" key={index}>
            <input type="text" placeholder="Project Name" />
            <textarea
              name=""
              id=""
              placeholder="Project Description"
            ></textarea>
            <input type="text" placeholder="Project Link" />
          </div>
        );
      })}
      <div className="buttonContainer">
        <button onClick={addProject}>Add Project</button>
        <button onClick={deleteProject}>Delet Project</button>
      </div>
    </div>
  );
};

export default Skill;
