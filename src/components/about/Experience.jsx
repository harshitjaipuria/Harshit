import React from "react";

const experienceContent = [
  {
    year: "   May, 2025 - July, 2025",
    position: " Full Stack Developer Intern",
    compnayName: "Lemin AI",
    details: `Contributed as a Full Stack Developer Intern at Lemin AI in the development of scalable web applications. Built and optimized frontend and backend systems using modern technologies, ensuring seamless performance, efficient APIs, and improved user experience.`,
  },
  {
    year: "December 2024 - May 2025",
    position: "Usability Analyst",
    compnayName: "UserTesting Inc",
    details: `Performed usability testing on websites and mobile apps, collecting qualitative feedback to identify UX issues and suggest improvements. Recorded and analyzed user interactions to help clients enhance product usability and user satisfaction.`,
  },
  {
    year: "2024 - 2026",
    position: "Head - Netwokring & Outreach",
    compnayName: "Entrepreneurship Cell - GLA University",
    details: `Led outreach and partnership initiatives for the Entrepreneurship Cell, building relationships with startups, investors, and industry partners. Organized events, workshops, and competitions to foster an innovative ecosystem and support student ventures.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
