import styles from "./Sidebar.module.css";

import { useNavigate, useLocation } from "react-router-dom";
import {menu} from "../../../constants/sidebar";



const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>
          MISSION <br />OS
        </h1>
        <p>Personal AI System</p>
      </div>

      <nav className={styles.menu}>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path
                  ? `${styles.item} ${styles.active}`
                  : styles.item
              }
            >
              <Icon />

              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
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
