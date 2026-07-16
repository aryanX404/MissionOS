import { useState } from "react";
import styles from "./GoalForm.module.css";

const GoalForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",

    description: "",

    priority: "Medium",

    deadline: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label>Title *</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Become a Software Engineer"
        />
      </div>

      <div className={styles.group}>
        <label>Description</label>

        <textarea
          rows="4"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your goal..."
        />
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label>Priority</label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>High</option>

            <option>Medium</option>

            <option>Low</option>
          </select>
        </div>

        <div className={styles.group}>
          <label>Deadline</label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.save} type="submit">
          Save Goal
        </button>
      </div>
    </form>
  );
};

export default GoalForm;
