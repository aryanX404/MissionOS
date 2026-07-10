import styles from "./HudCard.module.css";

const HudCard = ({
    title,
    status = "ACTIVE",
    children,
}) => {

    return (

        <section className={styles.card}>

            <div className={styles.header}>

                <h3>{title}</h3>

                <div className={styles.status}>

                    <span className={styles.dot}></span>

                    {status}

                </div>

            </div>

            <div className={styles.body}>

                {children}

            </div>

        </section>

    );

};

export default HudCard;