import React from "react";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon blue-icon">{"</>"}</div>
          <h3 className="skill-title">Development</h3>
          <p className="skill-text">Building robust, scalable applications with modern technologies</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon purple-icon">🎨</div>
          <h3 className="skill-title">Design</h3>
          <p className="skill-text">Creating beautiful, user-centered interfaces and experiences</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon yellow-icon">⚡</div>
          <h3 className="skill-title">Performance</h3>
          <p className="skill-text">Optimizing applications for speed and efficiency</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon green-icon">👥</div>
          <h3 className="skill-title">Collaboration</h3>
          <p className="skill-text">Working effectively with teams to deliver great products</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
