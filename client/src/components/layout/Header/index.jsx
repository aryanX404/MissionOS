import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { STORAGE_KEYS } from "../../../utils/storage";
import { Search, Bell, UserRound, Power } from "lucide-react";
import ConfirmModal from "../../../components/ui/ConfirmModal";

const Header = () => {
  const navigate = useNavigate();
  const [now, setNow] = useState(new Date());
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const user = JSON.parse(localStorage.getItem("missionos_user"));
  const hour = now.getHours();
  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) greeting = "Good Morning";
  else if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if (hour >= 17 && hour < 21) greeting = "Good Evening";
  else greeting = "Good Night";

  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleLogout = () => {
    setShowLogout(false);
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    navigate("/", { replace: true });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>
            {greeting}, <span>{user?.name.split(" ")[0] || "User"}</span>
          </h1>
          <p>{date}</p>
        </div>

        <div className={styles.middle}>
          <div className={styles.search}>
            <Search size={16} />
            <input type="text" placeholder="Search or type a command..." />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.time}>{time}</div>
          <button className={styles.iconButton}>
            <Bell size={16} />
            <span className={styles.badge}>1</span>
          </button>
          <button className={styles.profile}>
            <UserRound size={16} />
            <span>{user?.name.split(" ")[0] || "User"}</span>
          </button>
          <button className={styles.logout} onClick={() => setShowLogout(true)}>
            <Power size={18} />
          </button>
        </div>
      </header>

      <ConfirmModal
        isOpen={showLogout}
        title="Logout"
        message="Are you sure you want to end your MissionOS session?"
        confirmText="Logout"
        cancelText="Cancel"
        onConfirm={handleLogout}
        onCancel={() => setShowLogout(false)}
      />
    </>
  );
};

export default Header;
