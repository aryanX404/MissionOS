import styles from "./GoalCard.module.css";
import { useNavigate } from "react-router-dom";

const GoalCard = ({ goal }) => {
  const navigate = useNavigate();
  const deadline = new Date(goal.deadline).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/goals/long-term/${goal._id}`)}
    >
      <div className={styles.top}>
        <h2>{goal.title}</h2>

        <span
          className={`${styles.priority} ${styles[goal.priority.toLowerCase()]}`}
        >
          {goal.priority}
        </span>
      </div>

      <p className={styles.description}>{goal.description}</p>

      <div className={styles.footer}>
        <div>
          <span className={styles.label}>Deadline</span>

          <p>{deadline}</p>
        </div>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressTop}>
          <span>Progress</span>

          <span>{goal.progress}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
