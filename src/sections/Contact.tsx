import { useEffect, useRef } from "react";

export default function Contact() {
  const totoroRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const totoro = totoroRef.current;

      if (!totoro) return;

      const contactSection = totoro.closest(
        ".contact-section"
      ) as HTMLElement | null;

      if (!contactSection) return;

      const totoroRect = totoro.getBoundingClientRect();
      const sectionRect = contactSection.getBoundingClientRect();

      const acorn = document.createElement("div");

      acorn.className = "falling-acorn";
      acorn.textContent = "🌰";

        acorn.style.left =
          totoroRect.left -
          sectionRect.left +
          totoroRect.width * 0.25 +
          Math.random() * 20 -
          10 +
          "px";

        acorn.style.top =
          totoroRect.top -
          sectionRect.top +
          totoroRect.height * 0.15 +
          "px";

      acorn.style.setProperty(
        "--acorn-drift",
        `${Math.random() * 70 - 35}px`
      );

      acorn.style.setProperty(
        "--acorn-spin",
        `${Math.random() * 400 + 200}deg`
      );

      contactSection.appendChild(acorn);

      acorn.addEventListener("animationend", () => {
        acorn.remove();
      });
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-section" id="contact">

      {/* Running Totoro */}
      <img
        ref={totoroRef}
        src="/stickers/totoro-sticker1.png"
        alt=""
        className="running-totoro"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="contact-panel">

          <div className="contact-icon">ִ ࣪𖤐.ᐟ</div>

          <h2>Let's connect.</h2>

          <p>
            I'm always open to conversations about cybersecurity,
            technology, and new opportunities.
          </p>

          <div className="contact-socials">

            <a
              href="mailto:Frabina2016@gmail.com"
              className="social-button social-email"
              aria-label="Email Frabina"
              title="Frabina2016@gmail.com"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3V5Zm2 2v.4l7 5.2 7-5.2V7H5Zm14 10V9.9l-7 5.2-7-5.2V17h14Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/frabinaedwin/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button social-linkedin"
              aria-label="Frabina Edwin on LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.4H3.2V19h3.3V8.4ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM20.8 13c0-3.2-1.7-4.9-4.1-4.9a3.6 3.6 0 0 0-3.3 1.8V8.4h-3.2V19h3.3v-5.2c0-1.4.3-2.8 2-2.8s1.9 1.6 1.9 2.9V19h3.4v-6Z" />
              </svg>
            </a>

          </div>

          <span className="contact-email">
            Frabina2016@gmail.com
          </span>

        </div>
      </div>
    </section>
  );
}