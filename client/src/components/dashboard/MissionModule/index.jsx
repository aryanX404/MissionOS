import styles from "./MissionModule.module.css";

const mission = {
  title: "Complete Robotics Assignment",

  progress: 68,

  tasks: [
    {
      title: "Workout",
      completed: true,
    },

    {
      title: "DSA Practice",
      completed: true,
    },

    {
      title: "Robotics Assignment",
      completed: false,
    },

    {
      title: "Write Journal",
      completed: false,
    },
  ],

  streak: 16,

  focus: 82,

  xp: 120,

  nextAction: "Continue Robotics Assignment",
};

const MissionModule = () => {
  return (
    <div className={styles.container}>
      {/* Mission */}
      <div className={styles.section}>
        <span className={styles.label}>TODAY'S MISSION</span>

        <h2>{mission.title}</h2>
      </div>

      {/* Progress */}
      <div className={styles.section}>
        <div className={styles.progressHeader}>
          <span>Mission Progress</span>

          <span>{mission.progress}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${mission.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Tasks */}
      <div className={styles.section}>
        <span className={styles.label}>TODAY'S TASKS</span>

        <div className={styles.tasks}>
          {mission.tasks.map((task) => (
            <div key={task.title} className={styles.task}>
              <span
                className={
                  task.completed
                    ? styles.completed
                    : styles.pending
                }
              >
                {task.completed ? "✓" : "○"}
              </span>

              <span>{task.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}

      <div className={styles.stats}>
        <div className={styles.stat}>
          <h3>{mission.streak}</h3>
          <p>Day Streak</p>
        </div>

        <div className={styles.stat}>
          <h3>{mission.focus}%</h3>
          <p>Focus Score</p>
        </div>

        <div className={styles.stat}>
          <h3>+{mission.xp}</h3>
          <p>XP Today</p>
        </div>
      </div>

      {/* Next Action */}

      <button className={styles.button}>
        ▶ {mission.nextAction}
      </button>
    </div>
  );
};

export default MissionModule;