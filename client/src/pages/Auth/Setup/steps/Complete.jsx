import { useNavigate } from "react-router-dom";
import styles from "../Setup.module.css";
import CyberButton from "../../../../components/ui/CyberButton";
import { completeSetup } from "../../../../services/authService";

const Complete = () => {
  const navigate = useNavigate();

  const handleFinish = async () => {
    try {
      await completeSetup();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.badge}>INITIALIZATION COMPLETE</p>

        <h1>MissionOS is Ready</h1>

        <p className={styles.description}>
          Your personal AI operating system has been initialized successfully.
        </p>

        <CyberButton onClick={handleFinish}>
          Enter Dashboard
        </CyberButton>
      </div>
    </div>
  );
};

export default Complete;
