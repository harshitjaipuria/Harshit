import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Harshit", hasColor: "" },
  { meta: "last name", metaInfo: "Jaipuria", hasColor: "" },
  { meta: "Age", metaInfo: "21 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Indian", hasColor: "" },
  { meta: "Employment", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Varanasi, Uttar Pradesh", hasColor: "" },
  { meta: "phone", metaInfo: "+91 8318144369", hasColor: "" },
  { meta: "Email", metaInfo: "jaipuriaharshit146@gmail", hasColor: "" },
  { meta: "langages", metaInfo: "English, Hindi", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
