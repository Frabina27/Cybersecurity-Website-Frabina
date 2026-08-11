const experiences = [
  {
    date: "Summer 2026",
    role: "Endpoint Security & Systems Administration Intern",
    organization: "Wize Computing Academy",
  },
  {
    date: "Summer 2026",
    role: "AI Engineering — AISOP",
    organization: "Industry-Sponsored Capstone",
  },
  {
    date: "Fall 2025 — Present",
    role: "After School CS Instructor",
    organization: "Wize Computing Academy",
  },
  {
    date: "Fall 2024 — Summer 2026",
    role: "Private Tutor — CS & Test Prep",
    organization: "Grade Potential",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-layout">
        <div className="about-left">
          <div className="about-photo">
            <div className="photo-placeholder">
              <span className="photo-icon">▧</span>
              <p>your photo here</p>
              <span>portrait image</span>
            </div>
          </div>

          <div className="about-copy">
            <h2>A bit about me</h2>

            <p>
              I'm a Computer Science student at UT Dallas focused on
              cybersecurity, with hands-on experience across endpoint security,
              cloud-backed AI applications, secure APIs, and technical
              education.
            </p>

            <p>
              I enjoy working on projects where security and usability overlap
              - whether that means hardening devices, building authenticated
              cloud workflows, designing AI guardrails, or helping students
              understand technical concepts more clearly.
            </p>

            <p>
              Outside of internships and projects, I'm involved in campus
              tech leadership through Google Developer Student Club and ACM,
              where I've worked across leadership, design, mentoring, and
              student-focused technical initiatives.
            </p>

            <div className="about-tags">
              <span>Cybersecurity</span>
              <span>AWS</span>
              <span>Endpoint Security</span>
              <span>AI / RAG</span>
              <span>React</span>
              <span>Technical Education</span>
            </div>
          </div>
        </div>

        <div className="experience-side">
          <p className="section-eyebrow">&gt; EXPERIENCE</p>

          <div className="timeline">
            {experiences.map((experience) => (
              <article
                className="timeline-item"
                key={`${experience.role}-${experience.date}`}
              >
                <div className="timeline-marker" />

                <span className="timeline-date">
                  {experience.date}
                </span>

                <h3>{experience.role}</h3>

                <p className="timeline-org">
                  {experience.organization}
                </p>
              </article>
            ))}
          </div>

          <div className="campus-block">
            <p className="section-eyebrow">&gt; CAMPUS LEADERSHIP</p>

            <div className="campus-item">
              <span className="timeline-date">Fall 2026 — Present</span>
              <h3>President</h3>
              <p className="timeline-org">
                Google Developer Student Club @ UTD
              </p>
              <p className="campus-note">
                Previously: Sprints Director · Events & Marketing Director
              </p>
            </div>

            <div className="campus-item">
              <span className="timeline-date">Spring 2025 — Present</span>
              <h3>UX/UI Design Lead — MeteorMate</h3>
              <p className="timeline-org">
                ACM Development @ UTD
              </p>
              <p className="campus-note">
                Also served as Archives Lead, 2025–2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}