import Link from "next/link";
import styles from "./page.module.css";

const phases = [
  {
    title: "Intent Capture",
    summary:
      "Share what you need in plain language. Our assistant turns messy prompts into a structured mission brief without extra tooling from you.",
    highlights: [
      "Understands natural language and uploads side by side",
      "Extracts goals, constraints, and success metrics automatically",
      "Surfaces any missing info before moving forward",
    ],
  },
  {
    title: "Contextual Reasoning",
    summary:
      "We blend your knowledge base with live signals to map the fastest plan. Every decision is traceable for total visibility.",
    highlights: [
      "Continuously ranks context sources for relevance",
      "Explains why each step matters so stakeholders can align instantly",
      "Updates the plan in real time when requirements shift",
    ],
  },
  {
    title: "Autonomous Delivery",
    summary:
      "Once you sign off, the assistant executes the plan end-to-end while reporting measurable progress the entire way.",
    highlights: [
      "Runs automations across your stack with safe-guarded access",
      "Keeps humans in the loop through narrated checkpoints",
      "Hands back a clean handoff package the moment work completes",
    ],
  },
];

const differentiators = [
  {
    title: "Context Mesh",
    body: "A continuously updated knowledge graph fuses docs, product metrics, and conversations so the assistant reasons with the freshest picture of your business.",
    tags: ["Living data", "Source of truth"],
  },
  {
    title: "Explainable Autonomy",
    body: "Every action ships with a human-readable rationale and risk score, letting teams audit decisions without slowing velocity.",
    tags: ["Transparent", "Auditable"],
  },
  {
    title: "Multiplayer Ready",
    body: "Invite teammates to co-edit plans, annotate decisions, and hand off ownership midstream without losing continuity.",
    tags: ["Team mode", "Shared timeline"],
  },
  {
    title: "Outcome Guarantees",
    body: "We optimize for the metric you choose—activation, retention, revenue—and show measurable lift compared to manual workflows.",
    tags: ["Metric-first", "Measurable"],
  },
];

const faqs = [
  {
    question: "What makes this different from other AI copilots?",
    answer:
      "Most copilots stop at drafting content. We orchestrate the full execution lifecycle—scoping, decisioning, and delivery—while staying explainable and compliance-ready.",
  },
  {
    question: "How does it plug into my tools?",
    answer:
      "Native connectors sync with CRMs, analytics, and task hubs out of the box. A declarative action API handles anything custom without brittle scripts.",
  },
  {
    question: "Can I trust it with sensitive work?",
    answer:
      "Fine-grained roles, audit history, and on-demand human checkpoints keep critical workflows safe while still letting the assistant move fast.",
  },
];

export default function Home() {
  return ( 
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.badge}>Deep-dive explainer</div>
        <h1 className={styles.heroTitle}>
          How the Agent-First Workflow Works<span className={styles.heroHighlight}>—and why it feels different</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Meet the autonomous teammate that turns raw ideas into shipped outcomes. Here’s the exact playbook it follows and the advantages you get over conventional assistants.
        </p>
        <div className={styles.ctaGroup}>
          <Link className={styles.primaryCta} href="#how-it-works">
            Explore the flow
          </Link>
          <Link className={styles.secondaryCta} href="#why-different">
            Jump to key differences
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section id="how-it-works" className={styles.section}>
          <span className={styles.sectionEyebrow}>Inside the workflow</span>
          <h2 className={styles.sectionTitle}>Three phases from intent to impact</h2>
          <div className={styles.timeline}>
            {phases.map((phase, index) => (
              <article key={phase.title} className={styles.timelineItem}>
                <span aria-hidden="true" className={styles.timelineNumber}>
                  {index + 1}
                </span>
                <div className={styles.timelineContent}>
                  <h3>{phase.title}</h3>
                  <p>{phase.summary}</p>
                  <ul className={styles.bulletList}>
                    {phase.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why-different" className={styles.section}>
          <span className={styles.sectionEyebrow}>What sets us apart</span>
          <h2 className={styles.sectionTitle}>The differentiators teams feel on day one</h2>
          <div className={styles.cardGrid}>
            {differentiators.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className={styles.pillList}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.pill}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <span className={styles.sectionEyebrow}>Quick answers</span>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faq}>
            {faqs.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Want to go deeper? Check our latest product teardown for technical implementation notes and integration examples.
        </p>
        <Link href="https://vercel.com/templates" target="_blank" rel="noreferrer" className={styles.footerLink}>
          View integration templates
        </Link>
      </footer>
    </div>
  );
}
