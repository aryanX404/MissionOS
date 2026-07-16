import styles from "./GoalOverview.module.css";

const GoalOverview = ({ goal }) => {
  const progress = goal.progress || 0;

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h1>{goal.title}</h1>
          <p>{goal.description}</p>
        </div>

        <span className={`${styles.badge} ${styles[goal.priority.toLowerCase()]}`}>
          {goal.priority}
        </span>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default GoalOverview;