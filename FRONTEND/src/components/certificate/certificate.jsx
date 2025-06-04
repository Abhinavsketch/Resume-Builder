import "./certificate.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userInfo";

const Certificate = () => {
  const [certificateCount, setCertificateCount] = useState([1]);
  const { userData, handleCertificateChange } = useContext(UserContext);
  return (
    <div className="certificateContainer">
      {certificateCount.map((item, key) => {
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
        <button
          onClick={() => {
            setCertificateCount([
              ...certificateCount,
              certificateCount.length + 1,
            ]);
          }}
        >
          Add Certificate
        </button>
        <button
          onClick={() => {
            setCertificateCount(certificateCount.slice(0, -1));
          }}
        >
          Delete Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
