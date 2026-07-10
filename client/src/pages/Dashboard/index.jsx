import AppShell from "../../layouts/AppShell";
import styles from "./Dashboard.module.css";
import MissionModule from "../../components/dashboard/MissionModule";
import HudCard from "../../components/dashboard/HudCard";

const Dashboard = () => {
  return (
    <AppShell>
      <div className={styles.grid}>
        <HudCard title="MISSION MODULE">
          <MissionModule />
        </HudCard>
      </div>
    </AppShell>
  );
};

export default Dashboard;
