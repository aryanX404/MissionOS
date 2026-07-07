import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import Features from "./components/Features";
import Footer from "./components/Footer";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Workflow />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;