import { FiBell } from "react-icons/fi";
import styles from "./Notifications.module.css";

const Notification = () => {
  return (
    <button className={styles.notification}>
      <FiBell size={20} />

      <span className={styles.badge}>1</span>
    </button>
  );
};

export default Notification;