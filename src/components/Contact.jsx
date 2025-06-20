import React, { useState } from "react";

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>💬 Let's Connect</h2>
      <p style={styles.subtitle}>I'd love to hear from you. Reach out via email or connect on social platforms.</p>

      {/* Email */}
      <div
        style={styles.emailBlock}
        onMouseEnter={() => setHovered("email")}
        onMouseLeave={() => setHovered(null)}
      >
        <span role="img" aria-label="email" style={styles.emoji}>📧</span>
        <a
          href="mailto:ojani@example.com"
          style={{
            ...styles.emailLink,
            color: hovered === "email" ? "#f4d35e" : "#00e6e6",
            textShadow: hovered === "email" ? "0 0 6px #f4d35e" : "none",
          }}
        >
          ojani@example.com
        </a>
      </div>

      {/* Social Links */}
      <div style={styles.links}>
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.iconLink,
              transform: hovered === name ? "scale(1.07)" : "scale(1)",
              boxShadow:
                hovered === name
                  ? "0 0 12px #00e6e6"
                  : "0 4px 15px rgba(0, 230, 230, 0.1)",
            }}
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={icon} alt={name} style={styles.icon} />
            <span
              style={{
                ...styles.linkText,
                color: hovered === name ? "#00e6e6" : "#ccc",
              }}
            >
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  },
];

const styles = {
  section: {
  background: "#1a1a2e",
  color: "#e0e0e0",
  padding: "3rem 2rem",
  textAlign: "center",
  transition: "all 0.5s ease",
  borderTop: "4px solid #00e6e6",
  borderBottom : "4px solid #00e6e6",
  borderRadius: "50px" // 🔹 Added solid line on top
},

  heading: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    color: "#00e6e6",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#bbb",
    marginBottom: "2rem",
  },
  emoji: {
    fontSize: "1.2rem",
  },
  emailBlock: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, #262648, #1a1a40)",
    padding: "0.75rem 1.2rem",
    borderRadius: "30px",
    boxShadow: "0 4px 15px rgba(0, 230, 230, 0.2)",
    fontSize: "1rem",
    fontWeight: "500",
    gap: "0.6rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
    margin: "0 auto 2rem",
    width: "fit-content",
  },
  emailLink: {
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  iconLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.7rem 1.2rem",
    background: "linear-gradient(90deg, #262648, #1a1a40)",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  icon: {
    width: "20px",
    height: "20px",
    filter: "invert(100%)",
  },
  linkText: {
    transition: "all 0.3s ease",
  },
};

export default Contact;
