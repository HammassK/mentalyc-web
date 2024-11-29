import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";
import AddClientModal from "./addClientModal";
import { useState } from "react";

const ClientFilters = () => {
  const {
    filtersMainContainer,
    formControl,
    selectLabel,
    textField,
    divider,
    addClientButton,
  } = mainStyles;

  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((prev) => !prev);

  return (
    <Box sx={filtersMainContainer}>
      <FormControl sx={formControl}>
        <label style={selectLabel}>Client name</label>
        <TextField
          defaultValue=""
          variant="outlined"
          placeholder="Select client"
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
      <FormControl sx={formControl}>
        <label style={selectLabel}>Clinician name</label>
        <TextField
          defaultValue=""
          variant="outlined"
          placeholder="Select clinician"
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

      <Divider
        orientation="horizontal"
        sx={{
          ...divider,
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
        }}
        color="#e0e0e0"
      />

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

      {open && <AddClientModal open={open} toggleModal={toggleModal} />}
    </Box>
  );
};

export default ClientFilters;
