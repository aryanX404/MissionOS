import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.top}>

        <div className={styles.brand}>

          <h2>MissionOS</h2>

          <p>
            Your Personal AI Operating System built to help you plan,
            execute, reflect and improve every single day.
          </p>

        </div>

        <div className={styles.column}>

          <h4>Product</h4>

          <a href="#">Home</a>
          <a href="#">Workflow</a>
          <a href="#">Modules</a>
          <a href="#">Login</a>

        </div>

        <div className={styles.column}>

          <h4>Modules</h4>

          <a href="#">Goal Engine</a>
          <a href="#">Habit Engine</a>
          <a href="#">Finance Engine</a>
          <a href="#">Journal</a>

        </div>

        <div className={styles.column}>

          <h4>Developer</h4>

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>

        </div>

      </div>

      <div className={styles.bottom}>

        <span>© 2026 MissionOS</span>

        <span>Built by Aryan Kumar Singh</span>

      </div>

    </footer>
  );
};

export default Footer;