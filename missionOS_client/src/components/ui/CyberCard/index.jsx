import styles from "./CyberCard.module.css";

const CyberCard = ({ title, children, className = "" }) => {
  return (
    <section className={[styles.card, className].filter(Boolean).join(" ")}>
      {title && (
        <div className={styles.header}>
          <h3>{title}</h3>
        </div>
      )}

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default CyberCard;