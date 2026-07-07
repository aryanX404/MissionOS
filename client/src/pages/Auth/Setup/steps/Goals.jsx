import { useState } from "react";
import styles from "../Setup.module.css";
import CyberButton from "../../../../components/ui/CyberButton";

const Goals = ({ nextStep }) => {

    const [goal, setGoal] = useState("");
    const [goals, setGoals] = useState([]);

    const addGoal = () => {

        if (!goal.trim()) return;

        setGoals([...goals, goal.trim()]);
        setGoal("");

    };

    const removeGoal = (index) => {

        setGoals(goals.filter((_, i) => i !== index));

    };

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <p className={styles.badge}>
                    STEP 2 OF 4
                </p>

                <h1>Your Long-Term Goals</h1>

                <p className={styles.description}>
                    Add the goals you want MissionOS to help you achieve.
                </p>

                <div className={styles.goalInput}>

                    <input
                        className={styles.input}
                        placeholder="Enter a goal..."
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />

                    <CyberButton onClick={addGoal}>
                        Add Goal
                    </CyberButton>

                </div>

                <div className={styles.goalList}>

                    {goals.map((item, index) => (

                        <div
                            key={index}
                            className={styles.goalCard}
                        >

                            <span>{item}</span>

                            <button
                                onClick={() => removeGoal(index)}
                                className={styles.removeBtn}
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>

                <CyberButton onClick={nextStep}>
                    Continue
                </CyberButton>

            </div>

        </div>

    );

};

export default Goals;