import React from "react";

const SkillList = ({ title, skills }) => {
  return (
    <div>
      <p className="underline decoration-slate-500">{title}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
