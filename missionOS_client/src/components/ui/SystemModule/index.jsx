import styles from "./SystemModule.module.css";

const SystemModule = ({
  title,
  status = "ACTIVE",
  children,
  className = "",
}) => {
  return (
    <section className={`${styles.module} ${className}`}>
      <header className={styles.header}>
        <h3>{title}</h3>

        <div className={styles.status}>
          <span className={styles.dot}></span>
          <span>{status}</span>
        </div>
      </header>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default SystemModule;