import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClientTabs from "./clientTabs";
import ClientFilters from "./clientFilters";
import DataTable from "./dataTable";
import { mainStyles } from "../../styles/mainStyles";
import { tableRows } from "../../utils/constants";

const ClientsSection = () => {
  const {
    clientSectionContainer,
    clientsHeaderText,
    noDataContainer,
    noDataText,
  } = mainStyles;
  const [tabValue, setTabValue] = useState(0);
  const [filteredRows, setFilteredRows] = useState(tableRows);
  const [noResults, setNoResults] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (filteredRows.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [filteredRows]);

  return (
    <Box sx={clientSectionContainer}>
      <Typography sx={clientsHeaderText}>Clients</Typography>
      <ClientTabs tabValue={tabValue} handleTabChange={handleTabChange} />
      <ClientFilters
        setFilteredRows={setFilteredRows}
        originalRows={tableRows}
      />
      {noResults ? (
        <Box sx={noDataContainer}>
          <Typography sx={noDataText}>
            🙁 Oops! No matches found. Please double-check your input.
          </Typography>
        </Box>
      ) : (
        <DataTable rows={filteredRows} />
      )}
    </Box>
  );
};

export default ClientsSection;
