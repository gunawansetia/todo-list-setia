import PropTypes from "prop-types";
import styles from "./Info.module.css";

const Info = ({ totalTask, todayTask, tomorrowTask }) => {
  return (
    <div className={styles.info}>
      <p className={styles.p}>Total Task {totalTask}</p>
      <p className={styles.p}>Today Task {todayTask}</p>
      <p className={styles.p}>Tomorrow Todos {tomorrowTask}</p>
    </div>
  );
};

export default Info;

Info.propTypes = {
  totalTask: PropTypes.number,
  todayTask: PropTypes.number,
  tomorrowTask: PropTypes.number,
};
