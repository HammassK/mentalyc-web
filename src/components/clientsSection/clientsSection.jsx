import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ClientTabs from "./clientTabs";
import ClientFilters from "./clientFilters";
import DataTable from "./dataTable";
import { mainStyles } from "../../styles/mainStyles";

const ClientsSection = () => {
  const { clientSectionContainer, clientsHeaderText } = mainStyles;
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={clientSectionContainer}>
      <Typography sx={clientsHeaderText}>Clients</Typography>
      <ClientTabs tabValue={tabValue} handleTabChange={handleTabChange} />
      <ClientFilters />
      <DataTable />
    </Box>
  );
};

export default ClientsSection;
