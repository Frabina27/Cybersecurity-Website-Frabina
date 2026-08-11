const practiceAreas = [
  {
    icon: "◎",
    title: "Endpoint Security",
    description:
      "Endpoint hardening, software control, patching, browser restrictions, and device management across Windows environments.",
    skills: ["Action1", "Defender", "Hardening"],
  },
  {
    icon: "◇",
    title: "Cloud & Application Development",
    description:
      "Building serverless AI applications with AWS, including API integrations, document retrieval pipelines, Knowledge Bases, and frontend-to-backend workflows.",
    skills: ["AWS", "API Gateway", "Lambda", "Bedrock"],
  },
  {
    icon: "⌁",
    title: "AI Safety & Guardrails",
    description:
      "Implemented guardrails, validation, and feedback mechanisms for an AI chatbot to help constrain responses and improve the reliability of user interactions.",
    skills: ["Access Control", "Guardrails", "Validation", "AI Safety"],
  },
];

export default function Practice() {
  return (
    <section className="practice-section" id="practice">
      <div className="section-container">
        <div className="section-heading-row">
          <h2>How I practice</h2>

          <p>
            Hands-on experience spanning endpoint security, cloud application development, and AI safety.
          </p>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-card" key={area.title}>
              <div className="practice-icon">{area.icon}</div>

              <h3>{area.title}</h3>

              <p>{area.description}</p>

              <div className="skill-tags">
                {area.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}