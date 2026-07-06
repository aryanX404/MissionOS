import { NavLink } from "react-router-dom";
import navigation from "../../../constants/navigation";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>MISSION OS</h1>
        <span>Personal AI System</span>
      </div>

      <nav className={styles.navigation}>
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <span className={styles.status}></span>

        <div>
          <p>SYSTEM ONLINE</p>
          <small>Awaiting Login...</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;