import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 100;
    const colors = ['rgba(147, 51, 234, ', 'rgba(59, 130, 246, '];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      setTimeout(() => isMouseMoving = false, 100);
    });

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            particle.speedX -= Math.cos(angle) * 0.2;
            particle.speedY -= Math.sin(angle) * 0.2;
          }
        }

        // Add some randomness to movement
        particle.speedX += (Math.random() - 0.5) * 0.01;
        particle.speedY += (Math.random() - 0.5) * 0.01;

        // Limit speed
        const maxSpeed = 1;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ')';
        ctx.fill();

        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 pointer-events-none"
    />
  );
}