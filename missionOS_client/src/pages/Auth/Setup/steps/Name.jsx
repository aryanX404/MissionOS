import styles from "../Setup.module.css";
import CyberButton from "../../../../components/ui/CyberButton";

const Name = ({ nextStep }) => {

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <p className={styles.badge}>
                    STEP 1 OF 4
                </p>

                <h1>What should MissionOS call you?</h1>

                <input
                    className={styles.input}
                    placeholder="Enter your name"
                />

                <CyberButton onClick={nextStep}>
                    Continue
                </CyberButton>

            </div>

        </div>

    );

}

export default Name;