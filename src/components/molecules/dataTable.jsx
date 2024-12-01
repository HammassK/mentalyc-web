import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableColumns, tableRows } from "../../utils/constants";
import { mainStyles } from "../../styles/mainStyles";

const DataTable = ({ rows }) => {
  const { tableContainer, tableHeader, tableRow, clientType } = mainStyles;
  const getClientTypeColor = (type) => {
    switch (type) {
      case "Individual":
        return "#EFEAFD";
      case "Couple":
        return "#E2F3FC";
      case "Family":
        return "#FFEAD5";
      case "Child":
        return "#D5F6DE";
      case "Group":
        return "#FDF4C8";
      default:
        return "#ccc";
    }
  };

  const data = rows?.length > 0 ? rows : tableRows;

  return (
    <TableContainer sx={tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="client table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#fff" }}>
            {tableColumns.map((column) => (
              <TableCell key={column.field} sx={tableHeader}>
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={tableRow}>{row.clientName}</TableCell>
              <TableCell sx={tableRow}>{row.clinicianName}</TableCell>
              <TableCell sx={{ ...tableRow, display: "flex" }}>
                <Typography
                  sx={{
                    ...clientType,
                    backgroundColor: getClientTypeColor(row.clientType),
                  }}
                >
                  {row.clientType}
                </Typography>
              </TableCell>
              <TableCell sx={tableRow}>{row.treatmentPlan}</TableCell>
              <TableCell sx={tableRow}>{row.lastSession}</TableCell>
              <TableCell sx={tableRow}>{row.unsavedNotes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataTable.propTypes = {
  rows: PropTypes.array,
};

export default DataTable;
