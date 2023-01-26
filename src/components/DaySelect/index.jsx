import { FormControl, MenuItem, Select } from "@mui/material";
import "./DaySelect.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const initDaySelect = [
  { value: "today", text: "Today" },
  { value: "tomorrow", text: "Tomorrow" },
  { value: "", text: "-" },
];

const DaySelect = ({ value }) => {
  return (
    <>
      <FormControl
        sx={{
          padding: "10px 10px",
        }}
      >
        <Select
          id="day-select"
          sx={{ width: "12vw" }}
          value={value}
          className={classNames("day", {
            tomorrow: value === "tomorrow",
          })}
          inputProps={{ "aria-label": "Day Select" }}
        >
          {initDaySelect.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

DaySelect.propTypes = {
  value: PropTypes.string,
};

export default DaySelect;
