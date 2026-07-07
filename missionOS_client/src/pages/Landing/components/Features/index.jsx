import styles from "./Features.module.css";

const features = [
  {
    title: "Goal Engine",
    description:
      "Convert long-term ambitions into structured roadmaps with AI-generated daily missions.",
  },
  {
    title: "Habit Engine",
    description:
      "Build powerful habits using streaks, reminders and intelligent progress tracking.",
  },
  {
    title: "AI Coach",
    description:
      "Receive daily and weekly feedback based on your execution, consistency and productivity.",
  },
  {
    title: "Finance Engine",
    description:
      "Track income, pocket money, expenses and savings while understanding spending patterns.",
  },
  {
    title: "Smart Journal",
    description:
      "Write freely or answer guided reflection prompts to improve clarity and self-awareness.",
  },
  {
    title: "Analytics",
    description:
      "Visualize productivity, habits, finances and long-term growth through meaningful insights.",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.header}>
        <p className={styles.badge}>MODULES</p>

        <h2>Everything You Need To Improve</h2>

        <p className={styles.subtitle}>
          MissionOS combines planning, execution and intelligence into one
          unified operating system.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <div className={styles.card} key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;