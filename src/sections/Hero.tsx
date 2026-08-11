import { useEffect, useState } from "react";
import InteractiveGrid from "../components/InteractiveGrid";

const words = [
  "a designer.",
  "a developer.",
  "an educator.",
];

const terminalLines = [
  {
    text: "$ security scan --profile frabina",
    className: "terminal-command",
  },
  {
    text: "[◆] checking cloud infrastructure...",
    className: "",
  },
  {
    text: "[◆] reviewing endpoint controls...",
    className: "",
  },
  {
    text: "[!] warning: privileged user detected",
    className: "terminal-warning",
  },
  {
    text: "AWS IAM: least-privilege enforced",
    className: "terminal-success",
  },
  {
    text: "status: secure",
    className: "terminal-success",
  },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setDeleting(true), 1100);
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, visibleLines === 0 ? 500 : 650);

      return () => clearTimeout(timeout);
    }

    const resetTimeout = setTimeout(() => {
      setVisibleLines(0);
    }, 2600);

    return () => clearTimeout(resetTimeout);
  }, [visibleLines]);

  return (
    <section className="hero" id="top">
      <InteractiveGrid />

      <div className="hero-content">
        <div className="hero-left">
          <div className="availability-badge">
            <span className="status-dot" />
            looking for cybersecurity opportunities
          </div>

          <h1>
            Hello,I'm Frabina!{" "}
            <span className="typing-line">
              {text}
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">
            I&apos;m a cybersecurity-focused developer with hands-on
            experience in cloud infrastructure, endpoint security, access
            controls, and secure application development.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              See selected work <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-button"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal-card">
            <div className="terminal-scan" />

            <div className="terminal-header">
              <span />
              <span />
              <span />
              <p>security.log</p>
            </div>

            <div className="terminal-body">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <p
                  key={`${line.text}-${index}`}
                  className={`terminal-line ${line.className}`}
                >
                  {line.text}
                </p>
              ))}

              <span className="terminal-live-cursor">_</span>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card">
              <strong>AWS</strong>
              <span>cloud</span>
            </div>

            <div className="stat-card">
              <strong>MDM</strong>
              <span>security</span>
            </div>

            <div className="stat-card">
              <strong>AI</strong>
              <span>guardrails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}