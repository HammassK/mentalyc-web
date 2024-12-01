import PropTypes from "prop-types";
import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";
import AddClientModal from "./addClientModal";
import { useState } from "react";

const ClientFilters = ({ setFilteredRows, originalRows }) => {
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

  const [clientName, setClientName] = useState("");
  const [clinicianName, setClinicianName] = useState("");

  const handleClientChange = (event) => {
    setClientName(event.target.value);
    filterRows(event.target.value, clinicianName);
  };

  const handleClinicianChange = (event) => {
    setClinicianName(event.target.value);
    filterRows(clientName, event.target.value);
  };

  const filterRows = (client, clinician) => {
    let filtered = originalRows;

    if (client) {
      filtered = filtered.filter((row) =>
        row.clientName.toLowerCase().includes(client.toLowerCase())
      );
    }

    if (clinician) {
      filtered = filtered.filter((row) =>
        row.clinicianName.toLowerCase().includes(clinician.toLowerCase())
      );
    }

    if (!client && !clinician) {
      filtered = originalRows;
    }

    setFilteredRows(filtered);
  };

  return (
    <Box sx={filtersMainContainer}>
      <FormControl sx={formControl}>
        <label style={selectLabel}>Client name</label>
        <TextField
          value={clientName}
          onChange={handleClientChange}
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
          value={clinicianName}
          onChange={handleClinicianChange}
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

ClientFilters.propTypes = {
  originalRows: PropTypes.array,
  setFilteredRows: PropTypes.func,
};

export default ClientFilters;
