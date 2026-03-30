import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "HTML/CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JAVASCRIPT/TypeScript" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVA/C" },
  { skillClass: "p30", skillPercent: "30", skillName: "Python" },
  { skillClass: "p70", skillPercent: "70", skillName: "Next.js" },
  { skillClass: "p50", skillPercent: "50", skillName: "Node.js" },
  { skillClass: "p65", skillPercent: "65", skillName: "React / Tailwind css" },
  { skillClass: "p45", skillPercent: "45", skillName: "MySQL / MongoDB" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
