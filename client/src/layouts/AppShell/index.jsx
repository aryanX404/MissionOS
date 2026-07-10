import styles from "./AppShell.module.css";

import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const AppShell = ({ children }) => {
  return (
    <div className={styles.shell}>
      <Sidebar />

      <div className={styles.main}>
        <Header />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;