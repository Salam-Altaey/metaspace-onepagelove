"use client";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    // Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0; // Reset particles to prevent duplicates

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create Neuron Effect with particles starting at the center
      for (let i = 0; i < 180; i++) {
        particles.push({
          x: centerX + (Math.random() - 0.5) * canvas.width * 0.6,
          y: centerY + (Math.random() - 0.5) * canvas.height * 0.6,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Keep inside bounds
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 80})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas(); // Set initial canvas size
    window.addEventListener("resize", resizeCanvas); // Listen for screen changes
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden bg-[radial-gradient(circle_at_top_left,_#011627,_#03071e)]">
      {/* Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-30"></canvas>

      {/* Hero Text */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight relative z-10">
        Innovate. Build.{" "}
        <span className="bg-gradient-to-r from-[#EF4346] via-[#FACC15] to-[#8A2BE2] text-transparent bg-clip-text animate-gradient">
          <Typewriter
            words={["Lead.", "Create.", "Disrupt.", "Transform."]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mt-4 relative z-10">
        Metsaspace Inc. is revolutionizing the future with cutting-edge
        technology, intelligent solutions, and visionary ideas that transform
        how we interact with the digital world.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-6 mt-6 relative z-10">
        {/* Get Started Button - Scrolls to Contact */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative px-8 py-3 text-lg font-semibold uppercase tracking-wide text-white bg-[#E63946] rounded-lg transition-all duration-300 font-montserrat hover:shadow-[0_0_12px_#E63946] hover:scale-105 cursor-pointer">
          Get Started
        </Link>

        {/* Learn More Button - Scrolls to Services */}
        <Link
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative px-8 py-3 text-lg font-semibold uppercase tracking-wide text-white border-2 border-[#FACC15] rounded-lg transition-all duration-300 font-montserrat hover:bg-[#FACC15] hover:text-black hover:shadow-[0_0_12px_#FACC15] hover:scale-105 cursor-pointer">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Home;
