import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import CyberButton from "../../../components/ui/CyberButton";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.badge}>MISSIONOS</p>

        <h1>Welcome Back</h1>

        <p className={styles.subtitle}>Sign in to continue your mission.</p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label>Email</label>

            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.field}>
            <label>Password</label>

            <input type="password" placeholder="Enter your password" />
          </div>

          <CyberButton>Login</CyberButton>
        </form>

        <p className={styles.footerText}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
