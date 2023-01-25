import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import "./Priority.css";

const initPrioritySelect = [
  { value: "Urgent&Important", text: "Urgent - Important" },
  { value: "NotUrgent&Important", text: "Not Urgent - Important" },
  { value: "Urgent&NotImportant", text: "Urgent - Not Important" },
  { value: "NotUrgent&NotImportant", text: "Not Urgent - Not Important" },
];

const PrioritySelect = ({ value }) => {
  return (
    <>
      <FormControl sx={{ margin: "auto 15px" }}>
        <Select
          inputProps={{ "aria-label": "Priority Select" }}
          className="priority MuiOutlinedInput-notchedOutline"
          id="priority-select"
          value={value}
        >
          {initPrioritySelect.map((item, index) => {
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

PrioritySelect.propTypes = {
  value: PropTypes.string,
};

export default PrioritySelect;
