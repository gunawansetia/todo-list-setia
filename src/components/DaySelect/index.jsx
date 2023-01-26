import { FormControl, MenuItem, Select } from "@mui/material";
import "./DaySelect.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";

const initDaySelect = [
  { value: "today", text: "Today" },
  { value: "tomorrow", text: "Tomorrow" },
  { value: "none", text: "-" },
];

const DaySelect = ({ value }) => {
  const [select, setSelect] = useState(value ? value : "");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

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
          value={select}
          onChange={handleChange}
          className={classNames("day", {
            today: select === "today",
            tomorrow: select === "tomorrow",
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
