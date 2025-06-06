import "./certificate.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userInfo";

const Certificate = () => {
  const { userData, handleCertificateChange, setUserData, generatePoints } =
    useContext(UserContext);

  const addCertificate = () => {
    const newCertificate = {
      certificateName: "",
      certificateDescription: "",
      certificateLink: "",
    };
    setUserData((prev) => ({
      ...prev,
      aboutCertificate: [...prev.aboutCertificate, newCertificate],
    }));
  };

  const deleteCertificate = () => {
    if (userData.aboutCertificate.length > 1) {
      const updatedCerti = [...userData.aboutCertificate];
      updatedCerti.pop();
      setUserData((prev) => ({
        ...prev,
        aboutCertificate: updatedCerti,
      }));
    }
  };
  return (
    <div className="certificateContainer">
      {userData.aboutCertificate.map((item, key) => {
        return (
          <div className="certificateInput" key={key}>
            <input
              name="certificateName"
              value={item.certificateName}
              type="text"
              placeholder="Certificate Name"
              onChange={(e) => handleCertificateChange(e, key)}
            />
            <textarea
              name="certificateDescription"
              value={item.certificateDescription}
              placeholder="About Certificate"
              onChange={(e) => handleCertificateChange(e, key)}
            ></textarea>
            <button
              onClick={() => {
                generatePoints(key, "certificate");
              }}
            >
              Generate Description
            </button>
            <input
              name="certificateLink"
              value={item.certificateLink}
              type="text"
              placeholder="Certificate Link"
              onChange={(e) => handleCertificateChange(e, key)}
            />
          </div>
        );
      })}
      <div className="certificateButton">
        <button onClick={addCertificate}>Add Certificate</button>

        <button onClick={deleteCertificate}>Delete Certificate</button>
      </div>
    </div>
  );
};

export default Certificate;
