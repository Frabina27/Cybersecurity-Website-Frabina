import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    // Small square grid
    const gridSize = 24;

    // Mouse interaction radius
    const influenceRadius = 160;

    // Grid only covers this much of the hero
    const gridHeightPercentage = 1;

    let animationFrame = 0;

    // --------------------------------
    // RESIZE CANVAS
    // --------------------------------

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height * gridHeightPercentage;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    // --------------------------------
    // MOUSE
    // --------------------------------

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX - rect.left;

      mouse.y =
        event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // --------------------------------
    // SCROLL
    // --------------------------------

    const handleScroll = () => {
      const rect =
        canvas.getBoundingClientRect();

      if (
        rect.bottom < 0 ||
        rect.top > window.innerHeight
      ) {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    // --------------------------------
    // DRAW
    // --------------------------------

    const draw = () => {
      const width =
        canvas.clientWidth;

      const height =
        canvas.clientHeight;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // --------------------------------
      // SOFT CURSOR GLOW
      // --------------------------------

      if (
        mouse.x > -500 &&
        mouse.y > -500
      ) {
        const glow =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            220
          );

        glow.addColorStop(
          0,
          "rgba(34, 211, 238, 0.055)"
        );

        glow.addColorStop(
          0.45,
          "rgba(168, 85, 247, 0.03)"
        );

        glow.addColorStop(
          1,
          "rgba(0, 0, 0, 0)"
        );

        ctx.fillStyle = glow;

        ctx.fillRect(
          0,
          0,
          width,
          height
        );
      }

      // --------------------------------
      // GRID
      // --------------------------------

      for (
        let x = 0;
        x <= width;
        x += gridSize
      ) {
        for (
          let y = 0;
          y <= height;
          y += gridSize
        ) {
          const centerX =
            x + gridSize / 2;

          const centerY =
            y + gridSize / 2;

          // --------------------------------
          // FADE ONLY NEAR BOTTOM
          // --------------------------------

          const fadeStart =
            height * 0.62;

          const fadeEnd =
            height * 0.98;

          let verticalFade = 1;

          if (centerY > fadeStart) {
            verticalFade =
              1 -
              (centerY - fadeStart) /
                (fadeEnd - fadeStart);

            verticalFade =
              Math.max(
                0,
                Math.min(
                  1,
                  verticalFade
                )
              );
          }

          // --------------------------------
          // MOUSE DISTANCE
          // --------------------------------

          const dx =
            mouse.x - centerX;

          const dy =
            mouse.y - centerY;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          const strength =
            Math.max(
              0,
              1 -
                distance /
                  influenceRadius
            );

          // --------------------------------
          // BASE GRID
          // --------------------------------

          ctx.strokeStyle =
            `rgba(
              193,
              138,
              255,
              ${0.05 * verticalFade}
            )`;

          ctx.lineWidth = 1;

          ctx.strokeRect(
            x,
            y,
            gridSize,
            gridSize
          );

          // --------------------------------
          // ACTIVE CELLS
          // --------------------------------

          if (
            strength > 0 &&
            verticalFade > 0
          ) {
            const gradient =
              ctx.createLinearGradient(
                x,
                y,
                x + gridSize,
                y + gridSize
              );

            gradient.addColorStop(
              0,
              `rgba(
                232,
                121,
                249,
                ${
                  strength *
                  0.17 *
                  verticalFade
                }
              )`
            );

            gradient.addColorStop(
              1,
              `rgba(
                34,
                211,
                238,
                ${
                  strength *
                  0.20 *
                  verticalFade
                }
              )`
            );

            ctx.fillStyle =
              gradient;

            ctx.fillRect(
              x + 1,
              y + 1,
              gridSize - 2,
              gridSize - 2
            );
          }
        }
      }

      animationFrame =
        requestAnimationFrame(
          draw
        );
    };

    resizeCanvas();
    draw();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "scroll",
      handleScroll
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-grid"
      aria-hidden="true"
    />
  );
}