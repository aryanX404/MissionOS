import styles from "./Dashboard.module.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>

      <Sidebar />

      <div className={styles.main}>

        <Header />

        <main className={styles.content}>
          {/* Dashboard Components will come here */}
        </main>

      </div>

    </div>
  );
};

export default Dashboard;