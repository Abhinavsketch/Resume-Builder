import { useState } from "react";
import Personal from "../../components/personal/personal";
import Skill from "../../components/skills/skills";
import "./resume.css";
import Certificate from "../../components/certificate/certificate";
import Education from "../../components/Education/education";

const Resume = () => {
  const [count, setCount] = useState(0);
  const step = [
    {
      name: "Personal",
      render: () => <Personal />,
    },
    {
      name: "Skill",
      render: () => <Skill />,
    },
    {
      name: "Certificate",
      render: () => <Certificate />,
    },
    {
      name: "Education",
      render: () => <Education />,
    },
  ];
  const handleNext = () => {
    if (count < step.length - 1) {
      setCount(count + 1);
      console.log("Button Click");
    }
  };

  const handleBack = () => {
    if (count >= 1) {
      setCount(count - 1);
      console.log("back Click");
    }
  };
  return (
    <div className="resumeContainer">
      <div className="formContainer">
        <div className="title">
          <h2>Enter Your Information</h2>
        </div>
        <div className="info">{step[count].render()}</div>
        <div className="btnContainer">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
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
