import SystemModule from "../../../../components/ui/SystemModule";
import mission from "../../../../data/mockMissions";
import styles from "./MissionModule.module.css";

const MissionModule = () => {
  return (
    <SystemModule
      title="MISSION MODULE"
      status="ACTIVE"
    >
      <div className={styles.container}>

        {/* Mission Objective */}
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>
            Mission Objective
          </h4>

          <p className={styles.objective}>
            {mission.objective}
          </p>
        </section>

      </div>
    </SystemModule>
  );
};

export default MissionModule;