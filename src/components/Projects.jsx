import React, { useState } from "react";

const categories = ["All", "Web Development", "Data Science", "App Development"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectList = [
    {
      title: "Social Network Analysis",
      category: "Data Science",
      description: "Conducted Social Network Analysis using R, leveraging igraph for network visualization, centrality measures, and community detection.",
      year: 2025,
      image: "OIP.jpg",
      techStack: ["R", "igraph", "ggplot2"],
      links: {
        code: "https://github.com/OjaniJayasinghe/Social-Network-Analysis-with-R",
      },
    },
    {
      title: "Enterprise Data Warehouse System",
      category: "Data Science",
      description: "Designed and implemented a comprehensive enterprise-level data warehouse to consolidate and analyze sales data from multiple sources",
      year: 2025,
      image: "DW.jpg",
      techStack: ["SSIS", "SSAS","Power BI","SSMS", "Excel"],
      links: {
        code: "https://github.com/OjaniJayasinghe/Enterprise-Sales-Data-Warehouse-BI-Analytics-System",
      },
    },
    {
      title: "Power BI Dashboard",
      category: "Data Science",
      description: "Created three interactive Power BI dashboards I designed, delivering key insights for data-driven decision-making.",
      year: 2025,
      image: "BIDash.jpg",
      techStack: ["Excel", "Power BI"],
      links: {
        code: "https://github.com/OjaniJayasinghe/Power-BI-Dashboard",
      },
    },
    {
      title: "Skill Sharing and Learning Platform",
      category: "Web Development",
      description: "Built using React, Spring Boot, MongoDB, and tested with Postman, this platform enables users to share skills, follow learning paths, track progress, and interact with a community of learners. Key features include OAuth-based authentication, user profiles, skill-based recommendations, real-time updates, and a dynamic learning dashboard.",
      year: 2025,
      image: "skill_share.png",
      techStack: ["React", "Spring Boot", "MongoDB", "Postman"],
      links: {
        code: "https://github.com/OjaniJayasinghe/Skill_Sharing_and_learning_platform_Final",
      },
    },
     {
      title: "Portfolio Website",
      category: "Web Development",
      description: " modern, responsive portfolio website built with React to showcase my projects, skills, and experience. Features smooth navigation, interactive UI components, and mobile-friendly design to provide a seamless user experience across devices.",
      year: 2025,
      image: "portfolio.png",
      techStack: ["React", "Node.js"],
      links: {
        code: "#",
      },
    },
    {
      title: "AI powered UI/UX for public transport system in Sri Lanka",
      category: "App Development",
      description: "Our mobile app is a smart, green solution to urban travel. It helps users save time, money, and the environment by combining AI technology with sustainability. Our goal is to make public transport easier and faster with real-time updates, promote ecofriendly travel like carpooling and cycling, help users plan their journeys with better AI and reduce environmental impact by encouraging green travel.",
      year: 2025,
      image: "EcoPilot.png",
      techStack: ["Figma"],
      links: {
        code: "https://www.figma.com/design/Zg5kAsAdBrpk2LOpJSNwQL",
      },
    },
    {
      title: "Hotel Management System",
      category: "Web Development",
      description: "develop a modern, feature-rich web application that simplifies and automates key operations at the hotel. By introducing automated processes, such as online booking, service management, and financial reporting, the hotel staff can efficiently manage tasks with fewer errors, improving both operational workflows and guest satisfaction.",
      year: 2024,
      image: "hotelbreetas.png",
      techStack: ["React", "Node.js"],
      links: {
        code: "https://github.com/ChathurikaPiyumali/breetas-hotel-management-system",
      },
    },
    {
      title: "E-shopping Store Platform",
      category: "Web Development",
      description: "develop an e-shopping store using Java, JSP (JavaServer Pages), and MySQL Workbench. The primary goal is to create a dynamic and user-friendly online shopping platform where users can browse and purchase products.",
      year: 2024,
      image: "e-shopping.jpg",
      techStack: ["Java", "JSP", "MySQL Workbench"],
      links: {
        code: "#",
      },
    },
    {
      title: "HealthCare App Design",
      category: "App Development",
      description: "A modern mobile healthcare app designed using Figma, featuring an intuitive interface and an integrated AI chatbot. The app allows users to track symptoms, receive instant medical guidance, and access personalized health recommendations. The focus was on delivering a seamless user experience with a clean, accessible design and interactive chatbot flows to improve patient engagement.",
      year: 2024,
      image: "Health.png",
      techStack: ["Figma"],
      links: {
        code: "https://www.figma.com/design/jBPsCetkW1W6qUByexnN0q",
      },
    },
    {
      title: "Online Pharmacy Portal",
      category: "Web Development",
      description: "A full-stack web application built using PHP and MySQL Workbench to streamline online medicine purchasing. This portal allows users to browse medicines, add to cart, place orders, and track delivery status, while the admin panel enables inventory and order management. Designed for ease of use, security, and efficient pharmacy operations.",
      year: 2024,
      image: "pharmacy.jpg",
      techStack: ["PHP", "MySQL", "HTML", "CSS"],
      links: {
        code: "#",
      },
    },
    {
      title: "Food Delivery App",
      category: "App Development",
      description: "A modern, user-friendly mobile app interface designed to simplify online food ordering. The design includes intuitive navigation, restaurant browsing, real-time order tracking, and a sleek checkout experience — all crafted to enhance user convenience and engagement. Built with a focus on UX/UI best practices using Figma.",
      year: 2024,
      image: "arin.png",
      techStack: ["Figma"],
      links: {
        code: "https://www.figma.com/design/Jb78oAsXT4yHBzSGW3eXwc/Untitled?node-id=0-1&m=dev&t=v6CD4UnETQqZL7Vx-1",
      },
    },
    {
      title: "E-Learning Platform App",
      category: "App Development",
      description: "A modern e-learning mobile application designed to enhance learning accessibility and engagement. The app allows users to browse courses, view lessons, and track learning progress with a user-friendly interface. Built with Kotlin, it ensures smooth performance and seamless navigation, making online education more convenient for students on the go.",
      year: 2024,
      image: "learn.png",
      techStack: ["Figma","Andriod Studio", "Kotlin"],
      links: {
        code: "https://github.com/OjaniJayasinghe/E-Learning-App",
      },
    },
    {
      title: "All in one Productivity App",
      category: "App Development",
      description: "An Android app built with Kotlin in Android Studio, designed to boost daily efficiency. It integrates key features including an alarm clock, daily schedule tracker, and a stopwatch/timer, all in one intuitive interface. Ideal for students and professionals aiming to manage their time effectively.",
      year: 2024,
      image: "allinoneapp.webp",
      techStack: ["Figma","Android Studio", "Kotlin"],
      links: {
        code: "#",
      },
    },
  ];

  const filteredProjects = selectedCategory === "All"
    ? projectList
    : projectList.filter(p => p.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">📁 Featured Projects</h2>
      <div className="nav-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`nav-button ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.techStack.map((tech, idx) => (
                  <span className="tech-badge" key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                    {project.techStack.includes("Figma") ? "🎨 Design" : "💻 Code"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
