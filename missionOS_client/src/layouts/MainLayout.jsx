import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

import styles from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <Header />

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;