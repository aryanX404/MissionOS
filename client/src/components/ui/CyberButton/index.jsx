import styles from "./CyberButton.module.css";

const CyberButton = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default CyberButton;