import styles from "./Greeting.module.css";

const Greeting = () => {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  const date = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.greeting}>
      <h2 className={styles.title}>
        {greeting}, <span className={styles.username}>Aryan</span> 👋
      </h2>

      <p className={styles.subtitle}>{date}</p>
    </div>
  );
};

export default Greeting;