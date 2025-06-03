import "./Personal.css";

const Personal = () => {
  return (
    <div className="personalinfoContainer">
      <div className="name-container twoInfo">
        <input name="first" type="text" placeholder="First Name" />
        <input name="last" type="text" placeholder="Last Name" />
      </div>
      <div className="otherInfo">
        <input name="Gmail" type="text" placeholder="Gmail Here" />
        <input name="number" type="number" placeholder="Phone Number" />
        <input name="github" type="text" placeholder="GitHub Link" />
        <input name="linkedin" type="text" placeholder="Linkedin" />
      </div>
    </div>
  );
};

export default Personal;
