import React from "react";
import profileImage from "./profile.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="about-image"
        />

        {/* Text Content */}
        <div className="about-content">
          
          <p className="about-subtitle">
            Dedicated Data Science undergraduate with a strong passion for Data Science, Web Development, artificial intelligence and machine learning.
          </p>

          <p className="about-text">
            Currently in my third year pursuing a BSc (Hons) in Information Technology specializing in Data Science. I focus on applying analytical skills and programming expertise in Python, R, and SQL to create impactful data-driven solutions.
          </p>

          <p className="about-text">
            Beyond academics, I enjoy exploring emerging technologies, experimenting with machine learning frameworks, and continuously expanding my knowledge to stay at the forefront of the field.
          </p>


          <p className="about-text">
            When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects,
            or mentoring aspiring developers. I believe in the power of clean code, intuitive design, and collaborative
            teamwork.
          </p>

          {/* Animated Stats */}
          <div className="about-stats">
            <div className="stat-box">
              <h3 className="stat-number">
                <CountUp end={10} duration={2} enableScrollSpy/>+
              </h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">
                <CountUp end={2} duration={2} enableScrollSpy />+

              </h3>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
