import Personal from "../../components/personal/personal";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <div className="formContainer">
        <Personal />
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
