import React from "react";

const educationContent = [
  {
    year: "2028",
    degree: "B.TECH",
    institute: "GLA University Mathura",
    details: `Computer Science and Engineering (CSE) Specialization in Artificial Intelligence and Data Science`,
  },
  {
    year: "2023",
    degree: "12th Grade",
    institute: "Sunbeam Academy",
    details: `Central Board of Secondary Education (CBSE)`,
  },
  {
    year: "2021",
    degree: "High School",
    institute: "William Henry Smith Memorial School",
    details: `Indian Certificate of Secondary Education (ICSE)`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
