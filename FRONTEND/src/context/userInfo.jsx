import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
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

  const contextValue = {
    userData,
    setUserData,
    handleChange,
    handleProjectChange,
    handleCertificateChange,
    handelCollageData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
