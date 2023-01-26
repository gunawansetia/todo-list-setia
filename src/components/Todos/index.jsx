import { Grid, MenuItem, Select } from "@mui/material";
import ic_box_check from "../../assets/ic_box_check.svg";
import DaySelect from "../DaySelect";
import PrioritySelect from "../PrioritySelect";
import styles from "./Todos.module.css";

import classNames from "classnames";

let initTodos = [
  {
    text: "PR Matematika",
    check: false,
    priority: "Urgent&Important",
    day: "today",
  },
  {
    text: "Belajar Coding di Youtube",
    check: false,
    priority: "NotUrgent&Important",
    day: "tomorrow",
  },
];

const Todos = () => {
  return initTodos.map((todo, index, arr) => (
    <div
      className={classNames(styles.todos, {
        [styles.todoDivider]: !(index + 1 === arr.length),
      })}
    >
      <img className={styles.icBox} src={ic_box_check} alt="ic_box" />
      {todo.text}
      <div className={styles.allSelect}>
        <PrioritySelect value={todo.priority} />
        <DaySelect value={todo.day} />
      </div>
    </div>
  ));
};

export default Todos;
