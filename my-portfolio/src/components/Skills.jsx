// components/Skills.jsx
import React from "react";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "2rem" }}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
