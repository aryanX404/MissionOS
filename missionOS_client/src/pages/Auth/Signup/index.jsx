import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import CyberButton from "../../../components/ui/CyberButton";

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.badge}>MISSIONOS</p>

        <h1>Create Account</h1>

        <p className={styles.subtitle}>Start your journey with MissionOS.</p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className={styles.field}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>

          <CyberButton>Create Account</CyberButton>
        </form>

        <p className={styles.footerText}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
