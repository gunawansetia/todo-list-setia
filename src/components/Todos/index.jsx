import PropTypes from "prop-types";
import ic_box_check from "../../assets/ic_box_check.svg";
import DaySelect from "../DaySelect";
import PrioritySelect from "../PrioritySelect";
import styles from "./Todos.module.css";

import classNames from "classnames";
import { useState } from "react";

const Todos = ({ todos }) => {
  return todos.map((todo, index, arr) => (
    <div
      key={index}
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

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
