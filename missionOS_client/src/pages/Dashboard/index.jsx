import MissionModule from "./components/MissionModule";
import SystemModule from "../../components/ui/SystemModule";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.mainMission}>
        <MissionModule />
      </div>

      <div className={styles.goalEngine}>
        <SystemModule title="GOAL ENGINE">
          Coming Soon...
        </SystemModule>
      </div>

      <div className={styles.aiCoach}>
        <SystemModule title="AI COACH">
          Coming Soon...
        </SystemModule>
      </div>

      <div className={styles.habitEngine}>
        <SystemModule title="HABIT ENGINE">
          Coming Soon...
        </SystemModule>
      </div>

      <div className={styles.journal}>
        <SystemModule title="JOURNAL">
          Coming Soon...
        </SystemModule>
      </div>

      <div className={styles.systemStatus}>
        <SystemModule title="SYSTEM STATUS">
          Coming Soon...
        </SystemModule>
      </div>
    </section>
  );
};

export default Dashboard;