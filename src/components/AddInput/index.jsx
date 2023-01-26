import styled from "@mui/styled-engine";
import { TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
  },
});

const AddInput = () => {
  return <CssTextField fullWidth label="Add The Task..." id="add-task" />;
};

export default AddInput;
