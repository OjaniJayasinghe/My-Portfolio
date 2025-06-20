import React, { useRef, useEffect } from "react";

const FallingStarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star class
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2 + 0.2;
        this.speed = Math.random() * 1 + 0.07;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.opacityChange = (Math.random() * 0.005 + 0.002) * (Math.random() < 0.5 ? 1 : -1);
      }
      update() {
        this.y += this.speed;
        this.opacity += this.opacityChange;

        if (this.opacity <= 0.2 || this.opacity >= 1) {
          this.opacityChange *= -1;
        }

        if (this.y > height) {
          this.x = Math.random() * width;
          this.y = 0;
          this.size = Math.random() * 1.2 + 0.2;
          this.speed = Math.random() * 1 + 0.3;
          this.opacity = Math.random() * 0.5 + 0.5;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowColor = "white";
        ctx.shadowBlur = 5;
        ctx.fill();
      }
    }

    const starsCount = 70;
    const stars = [];

    for (let i = 0; i < starsCount; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "auto",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "#0d1b2a",
      }}
    />
  );
};

export default FallingStarsBackground;
