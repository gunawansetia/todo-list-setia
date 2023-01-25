import { Grid, MenuItem, Select } from "@mui/material";
import ic_box_check from "../../assets/ic_box_check.svg";
import DaySelect from "../DaySelect";
import PrioritySelect from "../PrioritySelect";
import styles from "./Todos.module.css";

let initTodos = {
  text: "PR Matematika",
  check: false,
  priority: "Urgent&Important",
  day: "today",
};

const Todos = () => {
  return (
    <div className={styles.todos}>
      <img className={styles.icBox} src={ic_box_check} alt="ic_box" />
      {initTodos.text}
      <div className={styles.allSelect}>
        <PrioritySelect value={initTodos.priority} />
        <DaySelect value={initTodos.day} />
      </div>
    </div>
  );
};

export default Todos;
