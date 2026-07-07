import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../../services/authService";
import { STORAGE_KEYS } from "../../../utils/storage";
import styles from "./Login.module.css";
import CyberButton from "../../../components/ui/CyberButton";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const data = await login(formData);
      
      localStorage.setItem(STORAGE_KEYS.TOKEN, data.token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data.user));

      if (data.user.isSetupCompleted) {
        navigate("/dashboard");
      } else {
        navigate("/setup");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.badge}>MISSIONOS</p>

        <h1>Welcome Back</h1>

        <p className={styles.subtitle}>Sign in to continue your mission.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <CyberButton type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Login"}
          </CyberButton>
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
