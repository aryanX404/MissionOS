import { FiUser } from "react-icons/fi";
import styles from "./Profile.module.css";

const Profile = ({ name = "Aryan" }) => {
  return (
    <button className={styles.profile}>
      <div className={styles.avatar}>
        <FiUser size={18} />
      </div>

      <span>{name}</span>
    </button>
  );
};

export default Profile;