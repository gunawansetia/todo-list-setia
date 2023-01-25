import { FormControl, MenuItem, Select } from "@mui/material";
import "./DaySelect.css";
import PropTypes from "prop-types";

const initDaySelect = [
  { value: "today", text: "Today" },
  { value: "tomorrow", text: "Tomorrow" },
  { value: "", text: "-" },
];

const DaySelect = ({ value }) => {
  return (
    <>
      <FormControl>
        <Select
          id="day-select"
          value={value}
          className="day MuiOutlinedInput-notchedOutline"
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
