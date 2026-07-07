import styles from "./Workflow.module.css";

const steps = [
  {
    number: "01",
    title: "Describe Goals",
    description:
      "Tell MissionOS what you want to achieve in life, career, fitness, finance or any personal mission.",
  },
  {
    number: "02",
    title: "AI Planning",
    description:
      "MissionOS creates a roadmap, breaks long-term goals into daily missions and suggests priorities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Complete your daily tasks, habits and missions while MissionOS tracks your progress automatically.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "Every day the AI reviews your performance, identifies weak points and adjusts your plan.",
  },
];

const Workflow = () => {
  return (
    <section className={styles.workflow}>
      <div className={styles.header}>
        <p className={styles.badge}>WORKFLOW</p>

        <h2>How MissionOS Works</h2>

        <p className={styles.subtitle}>
          A continuous loop of planning, execution and improvement.
        </p>
      </div>

      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.card}>
            <span className={styles.number}>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;