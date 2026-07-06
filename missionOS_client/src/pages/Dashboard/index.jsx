import CyberCard from "../../components/ui/CyberCard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <CyberCard title="Today's Mission">
                <p>Finish MissionOS Design System</p>
            </CyberCard>
        </div>
    );
};

export default Dashboard;