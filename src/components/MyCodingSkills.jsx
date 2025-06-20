import React from "react";
import { motion } from "framer-motion";

const expertise = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", image: "react.png" },
      { name: "HTML", image: "html.png" },
      { name: "CSS", image: "css.png" },
      { name: "JavaScript", image: "js.webp" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", image: "nodejs.png" },
      { name: "Spring Boot", image: "springboot.png" },
      { name: "MySQL", image: "mysql.png" },
      { name: "MongoDB", image: "mongodb.webp" },
    ],
  },
  {
    category: "Data Science & AI",
    items: [
      { name: "Python", image: "python.webp" },
      { name: "NumPy", image: "numpy.png" },
      { name: "Pandas", image: "pandas.png" },
      { name: "TensorFlow", image: "tensorflow.png" },
      { name: "PyTorch", image: "pytorch.png" },
      { name: "Matplotlib", image: "matplotlib.png" },
      { name: "R", image: "r.png" },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C", image: "cc.png" },
      { name: "C++", image: "c++.png" },
      { name: "Java", image: "java.webp" },
      { name: "Kotlin", image: "kotlin.png" },
    ],
  },
  {
    category: "Data Warehouse & BI",
    items: [
      { name: "SnowFlake", image: "snow.png" },
      { name: "SSAS", image: "ssas.png" },
      { name: "SSIS", image: "ssis.png" },
      { name: "Power BI", image: "bi.png" },
      { name: "Spark", image: "spark.webp" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Figma", image: "figma.png" },
      { name: "Android Studio", image: "android.png" },
      { name: "Canva", image: "canva.webp" },
    ],
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <h2 className="expertise-title">My <span>Expertise</span></h2>
      <div className="expertise-wrapper">
        {expertise.map((group, index) => (
          <motion.div
            key={index}
            className="category-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">{group.category}</h3>
            <div className="skill-grid">
              {group.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="skill-icon"
                  />
                  <span className="skill-label">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
