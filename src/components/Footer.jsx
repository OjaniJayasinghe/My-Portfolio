import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Ojani Jayasinghe • All rights reserved</p>
      
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(90deg, #0f0f2e, #1a1a40, #0f0f2e)",
    padding: "2rem 1rem",
    textAlign: "center",
    borderTop: "2px solid #00e6e6",
    marginTop: "4rem",
  },
  text: {
    color: "#cccccc",
    fontSize: "0.95rem",
    marginBottom: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  iconLink: {
    transition: "transform 0.3s ease, filter 0.3s ease",
  },
  icon: {
    width: "24px",
    height: "24px",
    filter: "invert(100%)",
  },
};

// Add glow effect on hover
document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll("footer a");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.2)";
      link.style.filter = "drop-shadow(0 0 6px #00e6e6)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
      link.style.filter = "invert(100%)";
    });
  });
});

export default Footer;
