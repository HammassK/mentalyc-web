import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";

const AddClientButton = ({ toggleModal }) => {
  const { addClientButton } = mainStyles;
  return (
    <Button
      variant="outlined"
      sx={{
        ...addClientButton,
        ":hover": {
          backgroundColor: "transparent",
          borderColor: "#731054",
        },
        ":focus": {
          outline: "none",
          boxShadow: "none",
        },
      }}
      onClick={toggleModal}
    >
      + Add new client
    </Button>
  );
};

AddClientButton.propTypes = {
  toggleModal: PropTypes.func,
};

export default AddClientButton;
