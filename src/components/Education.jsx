// src/components/Education.jsx
import React, { useEffect, useState } from 'react';
const educations = [
  {
    degree: 'BSc(Hons) in Information Technology Specializing in Data Science',
    institution: 'SLIIT',
    year: '2022 - Present',
    description: 'Specialized in Data Science & Web Development.',
  },
  {
    degree: 'AAT Passed Finalist',
    institution: 'AAT Sri Lanka',
    year: '2020 - 2022',
    description: 'Specialized in Accounting and Finance.',
  },
  {
    degree: 'Diploma in English',
    institution: 'CET Campus',
    year: '2021 - 2022',
    description: 'Specialized in English Language and Literature.',
  },
  
  
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className={`edu-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="edu-title">🎓 My Education</h2>
      <div className="edu-card-container">
        {educations.map((edu, index) => (
          <div className="flip-card" key={index} style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="year">{edu.year}</p>
              </div>
              <div className="flip-card-back">
                <p className="description">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
