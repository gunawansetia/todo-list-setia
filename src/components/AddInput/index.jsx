import styled from "@mui/styled-engine";
import { Button, TextField } from "@mui/material";

import styles from "./AddInput.module.css";

const CssTextField = styled(TextField)({
  width: "60vw",
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
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

const AddInput = () => {
  return (
    <>
      <div className={styles.addInput}>
        <CssTextField label="Add The Task..." id="add-task" />{" "}
        <CssButton>Add</CssButton>
      </div>
    </>
  );
};

export default AddInput;
