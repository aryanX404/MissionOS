import Greeting from "./components/Greeting";
import SearchBar from "./components/SearchBar";
import Clock from "./components/Clock";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Greeting />

      <div className={styles.rightSection}>
        <SearchBar />
        <Clock />
        <Notifications />
        <Profile/>
      </div>
    </header>
  );
};

export default Header;