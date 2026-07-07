import styles from "./Sidebar.module.css";

import {
  LayoutDashboard,
  Target,
  Repeat,
  Wallet,
  BookOpen,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.logo}>

        <h1>
          MISSION
          <br />
          OS
        </h1>

        <p>Personal AI System</p>

      </div>

      <nav className={styles.navigation}>

        <a className={`${styles.link} ${styles.active}`}>
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a className={styles.link}>
          <Target size={18} />
          Goals
        </a>

        <a className={styles.link}>
          <Repeat size={18} />
          Habits
        </a>

        <a className={styles.link}>
          <Wallet size={18} />
          Finance
        </a>

        <a className={styles.link}>
          <BookOpen size={18} />
          Journal
        </a>

        <a className={styles.link}>
          <Bot size={18} />
          AI Coach
        </a>

        <a className={styles.link}>
          <BarChart3 size={18} />
          Analytics
        </a>

        <a className={styles.link}>
          <Settings size={18} />
          Settings
        </a>

      </nav>

      <div className={styles.status}>

        <div className={styles.dot}></div>

        <div>

          <h4>SYSTEM ONLINE</h4>

          <p>Awaiting Login...</p>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;