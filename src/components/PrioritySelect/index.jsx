import styled from "@mui/styled-engine";
import {
  createTheme,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Priority.css";
import classNames from "classnames";
import { useState } from "react";

const initPrioritySelect = [
  { value: "Urgent&Important", text: "Urgent - Important" },
  { value: "NotUrgent&Important", text: "Not Urgent - Important" },
  { value: "Urgent&NotImportant", text: "Urgent - Not Important" },
  { value: "NotUrgent&NotImportant", text: "Not Urgent - Not Important" },
];

const UseSelect = styled(Select)(() => ({
  width: "18vw",
  ":hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
}));

const PrioritySelect = ({ value }) => {
  const [select, setSelect] = useState(value ? value : "");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <FormControl sx={{ padding: "10px 10px" }}>
        <UseSelect
          inputProps={{ "aria-label": "Priority Select" }}
          className={classNames("priority", {
            UrgentImportant: select === "Urgent&Important",
            NotUrgentImportant: select === "NotUrgent&Important",
            UrgentNotImportant: select === "Urgent&NotImportant",
            NotUrgentNotImportant: select === "NotUrgent&NotImportant",
          })}
          id="priority-select"
          value={select}
          onChange={handleChange}
        >
          {initPrioritySelect.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            );
          })}
        </UseSelect>
      </FormControl>
    </>
  );
};

PrioritySelect.propTypes = {
  value: PropTypes.string,
};

export default PrioritySelect;
