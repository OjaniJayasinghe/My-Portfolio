import React, { useState, useEffect } from "react";

const Header = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showScrollInfo, setShowScrollInfo] = useState(false);
  const navItems = ["About", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollInfo(window.scrollY > 100); // Show info after scrolling down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.titleGradient}>❮ Portfolio ❯</h1>
        {showScrollInfo && (
          <div style={styles.scrollInfo}>
            <span style={styles.name}>Ojani Jayasinghe</span>
            <span style={styles.roles}>
              Developer | Data Engineer | Data Science Explorer | AI Enthusiast | UI/UX Designer
            </span>
          </div>
        )}
      </div>

      <nav>
        <ul style={styles.navList}>
          {navItems.map((item, index) => (
            <li key={item} style={styles.navItem}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  ...styles.navLink,
                  color: hoverIndex === index ? "#00e6e6" : "#cccccc",
                  textShadow:
                    hoverIndex === index ? "0 0 6px #00e6e6" : "none",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    background: "linear-gradient(90deg, #1a1a40, #1e1e60, #0f0f30)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 2.5rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.4)",
    zIndex: 900,
  },
  titleGradient: {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    marginLeft: "-450px", // Adjusted for better alignment
  },
  navItem: {
    marginLeft: "2rem",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  scrollInfo: {
    marginTop: "0.5rem",
    animation: "fadeIn 0.5s ease-in-out",
  },
  name: {
    display: "block",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#8bb9ff",
  },
  roles: {
    fontSize: "0.8rem",
    color: "#d4d4d4",
  },
};

export default Header;
