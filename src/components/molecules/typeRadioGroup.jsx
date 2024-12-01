import PropTypes from "prop-types";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";

const TypeRadioGroup = ({ label, clientType, setClientType }) => {
  const { selectLabel, mandatoryField, modalSection, radioButton } = mainStyles;

  return (
    <>
      <label style={selectLabel}>
        {label} <span style={mandatoryField}>*</span>
      </label>
      <RadioGroup
        row
        value={clientType}
        onChange={(e) => setClientType(e.target.value)}
        sx={modalSection}
      >
        <FormControlLabel
          value="Individual"
          control={
            <Radio
              sx={{
                ...radioButton,
                "&.Mui-checked": {
                  color: "#731054",
                },
              }}
            />
          }
          label="Individual"
          slotProps={{
            typography: {
              sx: {
                fontSize: "12px",
                backgroundColor: "#EFEAFD",
                borderRadius: "4px",
                padding: "4px",
                color: "#040404",
              },
            },
          }}
        />

        <FormControlLabel
          value="Couple"
          control={
            <Radio
              sx={{
                ...radioButton,
                "&.Mui-checked": {
                  color: "#731054",
                },
              }}
            />
          }
          label="Couple"
          slotProps={{
            typography: {
              sx: {
                fontSize: "12px",
                backgroundColor: "#E2F3FC",
                borderRadius: "4px",
                padding: "4px",
                color: "#040404",
              },
            },
          }}
        />
      </RadioGroup>
    </>
  );
};

TypeRadioGroup.propTypes = {
  clientType: PropTypes.string,
  label: PropTypes.string,
  setClientType: PropTypes.func,
};

export default TypeRadioGroup;
