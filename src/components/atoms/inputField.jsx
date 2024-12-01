import PropTypes from "prop-types";
import { FormControl, TextField } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";

const InputField = ({ label, placeholder, value, onChange }) => {
  const { formControl, selectLabel, textField } = mainStyles;

  return (
    <FormControl sx={formControl}>
      <label style={selectLabel}>{label}</label>
      <TextField
        value={value}
        onChange={onChange}
        variant="outlined"
        placeholder={placeholder}
        sx={{
          ...textField,
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "white",
            },
            "& .MuiInputAdornment-root": {
              color: "#731054",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#731054",
            },
            "&:hover fieldset": {
              borderColor: "#731054",
            },
          },
        }}
        size="small"
      />
    </FormControl>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputField;
