import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import { mainStyles } from "../../styles/mainStyles";
import AddClientModal from "./addClientModal";
import { useState } from "react";
import AddClientButton from "../atoms/addClientButton";
import InputField from "../atoms/inputField";

const ClientFilters = ({ setFilteredRows, originalRows }) => {
  const { filtersMainContainer, divider } = mainStyles;

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
    <Box
      sx={{
        ...filtersMainContainer,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <InputField
        label={"Client name"}
        placeholder={"Select client"}
        value={clientName}
        onChange={handleClientChange}
      />
      <InputField
        label={"Clinician name"}
        placeholder={"Select clinician"}
        value={clinicianName}
        onChange={handleClinicianChange}
      />

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
      <AddClientButton toggleModal={toggleModal} />
      {open && <AddClientModal open={open} toggleModal={toggleModal} />}
    </Box>
  );
};

ClientFilters.propTypes = {
  originalRows: PropTypes.array,
  setFilteredRows: PropTypes.func,
};

export default ClientFilters;
