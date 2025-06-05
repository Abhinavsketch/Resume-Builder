import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const url = "http://localhost:4000";
  const [points, setPoints] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gmail: "",
    phoneNumber: "",
    gitHub: "",
    linkedin: "",
    languages: [],
    technologies: [],
    aboutProject: [
      {
        projectName: "",
        projectDescription: "",
        projectLink: "",
        techUsed: "",
      },
    ],
    aboutCertificate: [
      {
        certificateName: "",
        certificateDescription: "",
        certificateLink: "",
      },
    ],
    aboutCollage: [
      {
        collageName: "",
        collageDegree: "",
        collageGrade: "",
      },
    ],
    seniorSecondaryName: "",
    seniorSecondaryClass: "",
    seniorSecondaryGrade: "",
    higherName: "",
    higherClass: "",
    higherGrade: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (Array.isArray(userData[name])) {
      setUserData((prev) => ({
        ...prev,
        [name]: value.split(","),
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleProjectChange = (e, index) => {
    const { name, value } = e.target;
    const projectData = [...userData.aboutProject];
    projectData[index][name] = value;

    setUserData((prev) => ({
      ...prev,
      aboutProject: projectData,
    }));
  };

  const handleCertificateChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCertificate = [...userData.aboutCertificate];
    updatedCertificate[index][name] = value;

    setUserData((prev) => ({
      ...prev,
      aboutCertificate: updatedCertificate,
    }));
  };

  const handelCollageData = (e, index) => {
    const { name, value } = e.target;
    const updatedCollage = [...userData.aboutCollage];
    updatedCollage[index][name] = value;

    setUserData((prev) => ({
      ...prev,
      aboutCollage: updatedCollage,
    }));
  };

  const sendData = async () => {
    try {
      const response = await axios.post(
        `${url}/api/resume/generatepdf`,
        { userData, points },
        {
          responseType: "blob",
        }
      );
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfurl = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = pdfurl;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  const generatePoints = async (index) => {
    try {
      const response = await axios.post(`${url}/api/resume/description`, {
        discription: userData.aboutProject[index].projectDescription,
      });

      setPoints((prev) => [...prev, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    userData,
    setUserData,
    handleChange,
    handleProjectChange,
    handleCertificateChange,
    handelCollageData,
    sendData,
    points,
    generatePoints,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
