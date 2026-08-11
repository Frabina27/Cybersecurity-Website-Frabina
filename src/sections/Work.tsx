const projects = [
  {
    title: "AISOP",
    type: "AI CLOUD APPLICATION",
    description:
      "Built an AI chatbot integrating a React frontend with AWS Lambda, API Gateway, S3, and a Knowledge Base for document-grounded response generation. Implemented semantic document retrieval, authenticated source access, and AI guardrails.",
    metric: "AWS • React • Lambda • API Gateway • S3 • RAG",
  },
  {
    title: "Endpoint Security Deployment",
    type: "CYBERSECURITY",
    description:
      "Implemented scalable endpoint security controls across student devices, including software restrictions, patching, browser controls, security auditing, and application deployment.",
    metric: "50+ Devices • Defender • Endpoint Hardening",
  },
  {
    title: "MeteorMate",
    type: "PRODUCT DESIGN",
    description:
      "Led end-to-end UX design for a student-facing platform, producing 50+ wireframes and high-fidelity prototypes while building a reusable design system in Figma.",
    metric: "Figma • Prototyping • Design Systems",
  },
  {
    title: "Prodigy",
    type: "FULL-STACK APPLICATION",
    description:
      "Built at HackUTD, Prodigy is an all-in-one project management platform designed to consolidate team communication, scheduling, and task workflows into a single workspace.",
    metric: "Python • React • Flask • Axios",
  },
];

export default function Work() {
  return (
    <section className="work-section" id="work">
      <div className="section-container">
        <h2>Selected work</h2>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <div className="work-card-header">
                <h3>{project.title}</h3>
                <span>{project.type}</span>
              </div>

              <p>{project.description}</p>

              <strong>{project.metric}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}