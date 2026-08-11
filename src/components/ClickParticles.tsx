import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  life: number;
  rotation: number;
  color: string;
  outlined: boolean;
};

export default function ClickParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrame = 0;

    const colors = [
      "#67e8f9",
      "#22d3ee",
      "#c084fc",
      "#e879f9",
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createBurst = (event: MouseEvent) => {
      const count = 10;

      const directions = [
        0,
        Math.PI / 4,
        Math.PI / 2,
        (3 * Math.PI) / 4,
        Math.PI,
        (5 * Math.PI) / 4,
        (3 * Math.PI) / 2,
        (7 * Math.PI) / 4,
      ];

      for (let i = 0; i < count; i++) {
        const angle =
          directions[Math.floor(Math.random() * directions.length)];

        const speed = 0.7 + Math.random() * 1.5;

        const shapeType = Math.random();

        let width = 4;
        let height = 4;

        if (shapeType > 0.65) {
          width = 9 + Math.random() * 5;
          height = 2;
        } else if (shapeType > 0.3) {
          width = 3;
          height = 7 + Math.random() * 4;
        }

        particles.push({
          x: event.clientX,
          y: event.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          width,
          height,
          life: 1,
          rotation: angle,
          color:
            colors[
              Math.floor(Math.random() * colors.length)
            ],
          outlined: Math.random() > 0.72,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // digital-feeling deceleration
        particle.vx *= 0.975;
        particle.vy *= 0.975;

        // almost no gravity
        particle.vy += 0.002;

        particle.life -= 0.011;

        ctx.save();

        ctx.globalAlpha = Math.max(particle.life, 0);

        ctx.translate(
          Math.round(particle.x),
          Math.round(particle.y)
        );

        ctx.rotate(particle.rotation);

        if (particle.outlined) {
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;

          ctx.strokeRect(
            -particle.width / 2,
            -particle.height / 2,
            particle.width,
            particle.height
          );
        } else {
          ctx.fillStyle = particle.color;

          ctx.fillRect(
            -particle.width / 2,
            -particle.height / 2,
            particle.width,
            particle.height
          );
        }

        ctx.restore();
      });

      ctx.globalAlpha = 1;

      particles = particles.filter(
        (particle) => particle.life > 0
      );

      animationFrame =
        requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("click", createBurst);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("click", createBurst);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="click-particles"
      aria-hidden="true"
    />
  );
}