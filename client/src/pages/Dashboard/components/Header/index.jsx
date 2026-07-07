import { useEffect, useState } from "react";
import styles from "./Header.module.css";

import {
    Search,
    Bell,
    UserRound
} from "lucide-react";

const Header = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {

            setNow(new Date());

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const user = JSON.parse(localStorage.getItem("missionos_user"));

    const hour = now.getHours();

    let greeting = "Good Evening";

    if (hour >= 5 && hour < 12)
        greeting = "Good Morning";
    else if (hour >= 12 && hour < 17)
        greeting = "Good Afternoon";
    else if (hour >= 17 && hour < 21)
        greeting = "Good Evening";
    else
        greeting = "Good Night";

    const date = now.toLocaleDateString("en-GB", {

        day: "numeric",
        month: "long",
        year: "numeric"

    });

    const time = now.toLocaleTimeString("en-US", {

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    });

    return (

        <header className={styles.header}>
            <div className={styles.left}>
                <h1>
                    {greeting},{" "}
                    <span>{user?.name.split(" ")[0] || "User"} 👋</span>
                </h1>
                <p>{date}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.search}>
                    <Search size={16}/>
                    <input
                        type="text"
                        placeholder="Search or type a command..."
                    />
                </div>
                <div className={styles.time}>
                    {time}
                </div>
                <button className={styles.iconButton}>
                    <Bell size={16}/>
                    <span className={styles.badge}>1</span>
                </button>
                <button className={styles.profile}>
                    <UserRound size={16}/>
                    <span>
                        {user?.name.split(" ")[0] || "User"}
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;