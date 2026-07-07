import styles from "../Setup.module.css";
import CyberButton from "../../../../components/ui/CyberButton";

const Focus = ({ nextStep }) => {

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <p className={styles.badge}>
                    STEP 3 OF 4
                </p>

                <h1>Select Your Focus Areas</h1>

                <p className={styles.description}>
                    Choose the areas you want MissionOS to prioritize.
                </p>

                <div className={styles.checkboxGroup}>

                    <label><input type="checkbox" /> Career</label>
                    <label><input type="checkbox" /> Fitness</label>
                    <label><input type="checkbox" /> Finance</label>
                    <label><input type="checkbox" /> Learning</label>
                    <label><input type="checkbox" /> Reading</label>
                    <label><input type="checkbox" /> Music</label>

                </div>

                <CyberButton onClick={nextStep}>
                    Finish Setup
                </CyberButton>

            </div>

        </div>

    );

};

export default Focus;