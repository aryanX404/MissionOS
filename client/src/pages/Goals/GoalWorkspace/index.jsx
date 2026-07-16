import styles from "./GoalWorkspace.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoalOverview from "./components/GoalOverview";
import { getGoalById } from "../../../services/goalService";
import MilestoneSection from "./components/MilestoneSection";

const GoalWorkspace = () => {
  const { goalId } = useParams();

  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const data = await getGoalById(goalId);

        setGoal(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGoal();
  }, [goalId]);

  if (!goal) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={styles.workspace}>
      <div className={styles.topGrid}>
        <GoalOverview goal={goal} />

        <div className={styles.infoCard}>
          <h3>Goal Information</h3>

          <div className={styles.infoItem}>
            <span>Deadline</span>
            <p>{new Date(goal.deadline).toLocaleDateString()}</p>
          </div>

          <div className={styles.infoItem}>
            <span>Status</span>
            <p>{goal.completed ? "Completed" : "Active"}</p>
          </div>

          <div className={styles.infoItem}>
            <span>Priority</span>
            <p>{goal.priority}</p>
          </div>

          <div className={styles.infoItem}>
            <span>Created</span>
            <p>{new Date(goal.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      <div className={styles.middleGrid}>
        <MilestoneSection />

        <div className={styles.infoCard}>
          <h3>Quick Actions</h3>

          <button className={styles.actionButton}>Edit Goal</button>

          <button className={styles.actionButton}>Delete Goal</button>

          <button className={styles.actionButton}>+ Add Milestone</button>
        </div>
      </div>

    </section>
  );
};
export default GoalWorkspace;
