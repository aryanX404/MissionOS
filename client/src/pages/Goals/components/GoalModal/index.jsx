import styles from "./GoalModal.module.css";
import GoalForm from "../GoalForm";

const GoalModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Create Long Term Goal</h2>

          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <GoalForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default GoalModal;
