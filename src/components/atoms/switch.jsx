import PropTypes from "prop-types";
import { Box, Typography, Switch as MuiSwitch } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";
import { useState } from "react";

const RiskSwitch = ({ label }) => {
  const { switchContainer } = mainStyles;
  const [isHighRisk, setIsHighRisk] = useState(false);

  return (
    <Box sx={switchContainer}>
      <Typography sx={{ fontSize: "14px" }}>{label}</Typography>
      <MuiSwitch
        checked={isHighRisk}
        onChange={(e) => setIsHighRisk(e.target.checked)}
      />
    </Box>
  );
};

RiskSwitch.propTypes = {
  label: PropTypes.string,
};

export default RiskSwitch;
