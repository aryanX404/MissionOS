import styles from "./LongTerm.module.css";
import { useEffect, useState } from "react";
import { createGoal, getGoals } from "../../../../services/goalService";
import GoalModal from "../../components/GoalModal";
import GoalCard from "../../components/GoalCard";

const LongTerm = () => {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleCreateGoal = async (goal) => {
    try {
      const newGoal = await createGoal({
        ...goal,
        category: "longTerm",
      });
      setGoals((prev) => [newGoal, ...prev]);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getGoals("longTerm");

        setGoals(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGoals();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Long Term Goals</h1>

          <p>
            Define the goals that shape your future and track your progress over
            months or years.
          </p>
        </div>

        <button className={styles.newGoal} onClick={() => setShowModal(true)}>
          + New Goal
        </button>
      </div>

      {goals.length === 0 ? (
        <div className={styles.empty}>
          <h2>No Long Term Goals Yet</h2>

          <p>
            Create your first long-term goal to begin building your future with
            MissionOS.
          </p>
        </div>
      ) : (
        <div className={styles.goalList}>
          {goals.map((goal) => (
            <GoalCard key={goal._id} goal={goal} />
          ))}
        </div>
      )}
      <GoalModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleCreateGoal}
      />
    </section>
  );
};

export default LongTerm;
