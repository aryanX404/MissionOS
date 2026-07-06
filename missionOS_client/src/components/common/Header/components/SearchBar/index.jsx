import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  placeholder = "Search or type a command...",
}) => {
  return (
    <div className={styles.searchBar}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;