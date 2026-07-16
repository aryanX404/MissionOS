import styles from "./EmptyState.module.css";

const EmptyState = ({ category }) => {
  return (
    <div className={styles.emptyState}>

      <div className={styles.icon}>
        +
      </div>

      <h2>
        No {category} Added Yet
      </h2>

      <p>
        Create your first {category.toLowerCase()} to start tracking your
        progress and let MissionOS help you achieve it.
      </p>

      <button className={styles.button}>
        + Create First {category}
      </button>

    </div>
  );
};

export default EmptyState;