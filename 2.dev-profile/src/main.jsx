import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML & CSS",
    level: "Advanced",
    color: "blue",
  },
  {
    skill: "Javascript",
    level: "Advanced",
    color: "yellow",
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "purple",
  },
  {
    skill: "Python",
    level: "Intermediate",
    color: "green",
  },
  {
    skill: "Git & Github",
    level: "Beginner",
    color: "red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./Andy.jpg" className="avatar" alt="Andy Hoskins" />;
}

function Intro() {
  return (
    <div>
      <h1>Andy Hoskins</h1>
      <p>
        Full-stack web developer in training! Other intrests include reading and
        machine learning.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "Intermediate" && "👏"}
        {level === "Advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
