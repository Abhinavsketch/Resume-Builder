import "./education.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userInfo";
const Education = () => {
  const [collageCount, setCollageCount] = useState([1]);
  const { userData, handleChange, handelCollageData } = useContext(UserContext);
  return (
    <div className="educationContainer">
      {collageCount.map((item, key) => {
        return (
          <div className="higerStudies markcontainer" key={key}>
            <input
              name="collageName"
              value={item.collageName}
              type="text"
              placeholder="Collage Name"
              onChange={(e) => handelCollageData(e, key)}
            />
            <input
              name="collageDegree"
              value={item.collageDegree}
              type="text"
              placeholder="Degree Name"
              onChange={(e) => handelCollageData(e, key)}
            />
            <input
              name="collageGrade"
              value={item.collageGrade}
              type="number"
              placeholder="Grade or GPA"
              onChange={(e) => handelCollageData(e, key)}
            />
          </div>
        );
      })}
      <div className="seniorSecodary markcontainer">
        <input
          name="seniorSecondaryName"
          value={userData.seniorSecondaryName}
          type="text"
          placeholder="School Name"
          onChange={handleChange}
        />
        <input
          name="seniorSecondaryClass"
          value={userData.seniorSecondaryClass}
          type="number"
          placeholder="Class"
          onChange={handleChange}
        />
        <input
          name="seniorSecondaryGrade"
          value={userData.seniorSecondaryGrade}
          type="number"
          placeholder="Grade"
          onChange={handleChange}
        />
      </div>
      <div className="secondary markcontainer">
        <input
          name="higherName"
          value={userData.higherName}
          type="text"
          placeholder="School Name"
          onChange={handleChange}
        />
        <input
          name="higherClass"
          value={userData.higherClass}
          type="text"
          placeholder="Class"
          onChange={handleChange}
        />
        <input
          name="higherGrade"
          value={userData.higherGrade}
          type="number"
          placeholder="Grade"
          onChange={handleChange}
        />
      </div>
      <div className="educationbtn">
        <button
          onClick={() => {
            setCollageCount([...collageCount, collageCount.length + 1]);
            console.log(collageCount);
          }}
        >
          Add Collage
        </button>
      </div>
    </div>
  );
};

export default Education;
