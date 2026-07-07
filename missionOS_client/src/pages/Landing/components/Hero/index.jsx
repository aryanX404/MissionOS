import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
import CyberButton from "../../../../components/ui/CyberButton";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.badge}>PERSONAL AI OPERATING SYSTEM</p>

        <h1 className={styles.title}>MissionOS</h1>

        <h2 className={styles.subtitle}>
          The AI that transforms ambition into achievement.
        </h2>

        <p className={styles.description}>
          MissionOS is your intelligent companion for planning goals, building
          habits, tracking progress, managing finances, and becoming better
          every day.
        </p>

        <div className={styles.actions}>
          <CyberButton onClick={() => navigate("/signup")}>
            Initialize MissionOS
          </CyberButton>

          <CyberButton variant="secondary" onClick={() => navigate("/login")}>
            Login
          </CyberButton>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.aiCore}>
          <div className={styles.ring1}></div>
          <div className={styles.ring2}></div>
          <div className={styles.ring3}></div>

          <div className={styles.center}></div>

          <span className={`${styles.node} ${styles.nodeTop}`}></span>
          <span className={`${styles.node} ${styles.nodeRight}`}></span>
          <span className={`${styles.node} ${styles.nodeBottom}`}></span>
          <span className={`${styles.node} ${styles.nodeLeft}`}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
