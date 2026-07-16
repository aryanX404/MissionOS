import styles from "./Workspace.module.css";

import EmptyState from "../EmptyState";
import LongTerm from "../../sections/LongTerm";

const Workspace = ({ selected }) => {

    switch (selected) {

        case "longTerm":
            return (
                <section className={styles.workspace}>
                    <LongTerm />
                </section>
            );

        default:
            return (
                <section className={styles.workspace}>
                    <EmptyState category={selected} />
                </section>
            );
    }

};

export default Workspace;