import { useState } from "react";
import Personal from "../../components/personal/personal";
import Skill from "../../components/skills/skills";
import "./resume.css";

const Resume = () => {
  const [count, setCount] = useState(0);
  const infoComponent = [<Personal />, <Skill />];
  return (
    <div className="resumeContainer">
      <div className="formContainer">
        <div className="title">
          <h2>Enter Your Information</h2>
        </div>
        <div className="info">{infoComponent[count]}</div>
        <div className="btnContainer">
          <button onClick={() => setCount(count - 1)}>Back</button>
          <button onClick={() => setCount(count + 1)}>Next</button>
        </div>
      </div>
      <div className="previewContainer">
        <div className="liveContainer">
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;
