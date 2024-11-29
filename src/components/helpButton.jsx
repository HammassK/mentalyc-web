import { Box, Typography } from "@mui/material";
import QuestionIcon from "../assets/svgs/questionIcon";
import { mainStyles } from "../styles/mainStyles";

const HelpButton = () => {
  const { helpButtonContainer, helpText } = mainStyles;
  return (
    <Box sx={helpButtonContainer}>
      <QuestionIcon />
      <Typography sx={helpText}>Help</Typography>
    </Box>
  );
};

export default HelpButton;
