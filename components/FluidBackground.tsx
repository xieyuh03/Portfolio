'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  decay: number;
  color: { r: number; g: number; b: number };
  angle: number;
  spin: number;
}

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    lastX: 0,
    lastY: 0,
  });
  const lastEmitTimeRef = useRef(0);

  const fluidColors = [
    { r: 100, g: 150, b: 220 },
    { r: 150, g: 100, b: 200 },
    { r: 200, g: 130, b: 200 },
    { r: 80, g: 160, b: 230 },
    { r: 140, g: 120, b: 210 },
    { r: 100, g: 180, b: 200 },
    { r: 210, g: 140, b: 190 },
    { r: 120, g: 170, b: 230 },
    { r: 160, g: 130, b: 220 },
    { r: 180, g: 150, b: 210 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const createParticle = (x: number, y: number, vx: number, vy: number): Particle => ({
      x,
      y,
      vx: vx * 0.15 + (Math.random() - 0.5) * 1,
      vy: vy * 0.15 + (Math.random() - 0.5) * 1,
      size: Math.random() * 40 + 20,
      life: 1,
      decay: Math.random() * 0.01 + 0.008,
      color: fluidColors[Math.floor(Math.random() * fluidColors.length)],
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.05,
    });

    const updateParticle = (particle: Particle) => {
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      particle.angle += particle.spin;
      particle.vx += Math.cos(particle.angle) * 0.1;
      particle.vy += Math.sin(particle.angle) * 0.1;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.5;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.5;
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.life * 0.3;

      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );

      const c = particle.color;
      gradient.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0.4)`);
      gradient.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, 0.2)`);
      gradient.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.globalCompositeOperation = 'screen';

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.vx = e.clientX - mouse.lastX;
      mouse.vy = e.clientY - mouse.lastY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const speed = Math.sqrt(mouse.vx ** 2 + mouse.vy ** 2);
      const now = Date.now();

      if (speed > 3 && now - lastEmitTimeRef.current > 60) {
        const count = Math.min(Math.floor(speed / 10), 3);

        for (let i = 0; i < count; i++) {
          particlesRef.current.push(
            createParticle(
              mouse.x + (Math.random() - 0.5) * 20,
              mouse.y + (Math.random() - 0.5) * 20,
              mouse.vx * 0.2,
              mouse.vy * 0.2
            )
          );
        }

        lastEmitTimeRef.current = now;
      }

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const speed = Math.random() * 1.5 + 0.8;
        particlesRef.current.push(
          createParticle(
            e.clientX,
            e.clientY,
            Math.cos(angle) * speed,
            Math.sin(angle) * speed
          )
        );
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        updateParticle(particles[i]);
        drawParticle(particles[i]);

        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
