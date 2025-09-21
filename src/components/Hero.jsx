const Hero = () => (
  <section className="hero">
    <h2 style={styles.heading}>
      Hi, I'm <span style={styles.gradientText}>Ojani Jayasinghe</span>
    </h2>
    <p>Developer | Data Engineer | Data Science Explorer | AI Enthusiast | UI/UX Designer</p>

    <div style={styles.buttonGroup}>
      <a href="#projects" style={styles.primaryButton}>View My Work</a>
      <a href="/Ojani Jayasinghe CV.pdf" download style={styles.secondaryButton}>
        ⬇ Download CV
      </a>
    </div>
  </section>
);


const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    textAlign: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  gradientText: {
    background: "linear-gradient(90deg, #4384ff, #bb60ec)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subheading: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "600px",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
  },
  primaryButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  secondaryButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#1f2937",
    color: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
};

export default Hero;
