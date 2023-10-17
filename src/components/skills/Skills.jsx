import React from "react";
import CreateSkills from "./CreateSkills";
import dataSkills from "../../data/dataSkills";

function skillItem(item) {
  return (
    <CreateSkills
      key={item.id}
      icon={item.icon}
      alt={item.alt}
      name={item.name}
    />
  );
}

function Skills() {
  return (
    <section id="skills-link">
      <div className="skills-flex">
        <h3>Skills</h3>
        <hr />
      </div>
      <div className="skills-container">{dataSkills.map(skillItem)}</div>
    </section>
  );
}

export default Skills;
