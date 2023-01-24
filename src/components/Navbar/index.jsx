import todoListIcon from "../../assets/ic_logo.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={todoListIcon} alt="todo list icon" className={styles.navIcon} />
      <h1 className={styles.title}>Todo List Setia</h1>
    </nav>
  );
};

export default Navbar;
