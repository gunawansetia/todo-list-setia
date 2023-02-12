import PropTypes from "prop-types";
import ic_box_check from "../../assets/ic_box_check.svg";
import DaySelect from "../DaySelect";
import PrioritySelect from "../PrioritySelect";
import styles from "./Todos.module.css";
import classNames from "classnames";

const Todos = ({ todos, updateDay }) => {
  const handleChange = (event, id, arr) => {
    updateDay(event, id, arr);
  };

  return todos.map((todo, index, arr) => (
    <div
      key={todo.id}
      className={classNames(styles.todos, {
        [styles.todoDivider]: !(index + 1 === arr.length),
      })}
    >
      <img className={styles.icBox} src={ic_box_check} alt="ic_box" />
      {todo.text}
      <div className={styles.allSelect}>
        <PrioritySelect value={todo.priority} />
        <DaySelect
          value={todo.day}
          onChange={(event) => {
            handleChange(event, todo.id, arr);
          }}
        />
      </div>
    </div>
  ));
};

Todos.propTypes = {
  todos: PropTypes.array,
  updateDay: PropTypes.func,
};

export default Todos;
