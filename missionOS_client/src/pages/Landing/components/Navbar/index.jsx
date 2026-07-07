import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import CyberButton from "../../../../components/ui/CyberButton";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>MissionOS</div>

      <CyberButton variant="secondary" onClick={() => navigate("/login")}>
        Login
      </CyberButton>
    </header>
  );
};

export default Navbar;
