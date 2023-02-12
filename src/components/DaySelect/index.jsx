import { FormControl, MenuItem, Select } from "@mui/material";
import "./DaySelect.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const DaySelect = ({ value, onChange, readOnly }) => {
  const [select, setSelect] = useState(value);
  const { initDaySelect } = useContext(MyContext);

  const handleSelect = (e) => {
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
          onChange={(e) => {
            onChange(e);
            handleSelect(e);
          }}
          className={classNames("day", {
            today: select === "today",
            tomorrow: select === "tomorrow",
          })}
          readOnly={readOnly}
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
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default DaySelect;
