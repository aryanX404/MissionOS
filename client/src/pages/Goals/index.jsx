import { useState } from "react";

import AppShell from "../../layouts/AppShell";

import styles from "./Goals.module.css";

// import GoalsSidebar from "./components/GoalsSidebar";
import GoalTabs from "./components/GoalTabs";
import Workspace from "./components/Workspace";

const Goals = () => {
  const [selected, setSelected] = useState("longTerm");

  return (
    <AppShell>

      <div className={styles.workspace}>
        <GoalTabs selected={selected} setSelected={setSelected} />
        <Workspace selected={selected} />
      </div>

      
    </AppShell>
  );
};

export default Goals;
