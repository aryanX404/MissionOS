import styles from "./GoalTabs.module.css";
import { GOAL_CATEGORIES } from "../../../../constants/goals";

const GoalTabs = ({ selected, setSelected }) => {
  return (
    <div className={styles.tabs}>
      {GOAL_CATEGORIES.map((goal) => (
        <button
          key={goal.id}
          className={
            selected === goal.id ? `${styles.tab} ${styles.active}` : styles.tab
          }
          onClick={() => setSelected(goal.id)}
        >
          {goal.title}
        </button>
      ))}
    </div>
  );
};

export default GoalTabs;
