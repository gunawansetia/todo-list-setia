import React from "react";
import PropTypes from "prop-types";
import gambarBatas from "../../assets/gambar_batas.jpg";
import ic_check_done from "../../assets/ic_check_done.svg";
import PrioritySelect from "../PrioritySelect";
import DaySelect from "../DaySelect";
import styles from "./TodosDone.module.css";

export default function TodosDone({ doneTodos }) {
  return (
    <>
      <div className={styles.todosDone}>
        <img className={styles.gambarBatas} src={gambarBatas} alt="" />
        <div className={styles.paper}>
          {doneTodos.map((doneTodo) => (
            <div className={styles.todos} key={doneTodo.id}>
              <img className={styles.icBox} src={ic_check_done} alt="ic_box" />
              <div className={styles.textTodos}>
                {doneTodo.text}
                <p className={styles.info}> checked on 18 Jan 23, 15.00 WIB</p>
              </div>
              <div className={styles.allSelect}>
                <PrioritySelect readOnly={true} value={doneTodo.priority} />
                <DaySelect readOnly={true} value={doneTodo.day} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

TodosDone.propTypes = {
  doneTodos: PropTypes.array,
};
