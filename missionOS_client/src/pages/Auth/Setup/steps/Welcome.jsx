import styles from "../Setup.module.css";
import CyberButton from "../../../../components/ui/CyberButton";

const Welcome = ({ nextStep }) => {

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <p className={styles.badge}>
                    MISSION INITIALIZATION
                </p>

                <h1>Welcome to MissionOS</h1>

                <p className={styles.description}>
                    Let's configure your AI operating system.
                </p>

                <CyberButton onClick={nextStep}>
                    Initialize MissionOS
                </CyberButton>

            </div>

        </div>

    );

}

export default Welcome;