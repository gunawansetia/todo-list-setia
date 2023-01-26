import styled from "@mui/styled-engine";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import "./Priority.css";
import classNames from "classnames";

const initPrioritySelect = [
  { value: "Urgent&Important", text: "Urgent - Important" },
  { value: "NotUrgent&Important", text: "Not Urgent - Important" },
  { value: "Urgent&NotImportant", text: "Urgent - Not Important" },
  { value: "NotUrgent&NotImportant", text: "Not Urgent - Not Important" },
];

const UseSelect = styled(Select)(() => ({
  width: "20vw",
}));

const PrioritySelect = ({ value }) => {
  return (
    <>
      <FormControl sx={{ padding: "10px 10px" }}>
        <UseSelect
          inputProps={{ "aria-label": "Priority Select" }}
          className={classNames("priority", {
            NotUrgImp: value === "NotUrgent&Important",
          })}
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
        </UseSelect>
      </FormControl>
    </>
  );
};

PrioritySelect.propTypes = {
  value: PropTypes.string,
};

export default PrioritySelect;
