import styled from "@mui/styled-engine";
import { Button, TextField } from "@mui/material";

import styles from "./AddInput.module.css";
import PropTypes from "prop-types";

const CssTextField = styled(TextField)({
  width: "60vw",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
});

const CssButton = styled(Button)({
  backgroundColor: "#3886F7",
  padding: "10px 30px",
  borderRadius: "10px",
  margin: "0 20px",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#227BFB",
  },
});

const AddInput = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <div className={styles.addInput}>
        <form onSubmit={onSubmit}>
          <CssTextField
            value={value}
            onChange={onChange}
            label="Add The Task..."
            id="add-task"
          />
          <CssButton type="submit">Add</CssButton>
        </form>
      </div>
    </>
  );
};

AddInput.propTypes = {
  value: PropTypes.text,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddInput;
