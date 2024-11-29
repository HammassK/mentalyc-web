import PropTypes from "prop-types";
import { Tab, Tabs, styled } from "@mui/material";

const CustomTabs = styled(Tabs)({
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  height: "20px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  width: "100%",
  marginTop: "20px",
});
const CustomTab = styled(Tab)({
  textTransform: "none",
  borderRadius: "24px",
  height: "20px",
  fontWeight: "400",
  fontSize: "14px",
  "&.Mui-selected": {
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    color: "#000",
  },
  "&:not(.Mui-selected)": {
    color: "#9E9E9E",
  },
  "&:hover": {
    color: "#000",
  },
  "&:focus": {
    outline: "none",
  },
});

const ClientTabs = ({ tabValue, handleTabChange }) => {
  return (
    <CustomTabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
      <CustomTab label="In treatment (21)" />
      <CustomTab label="Deactivated (10)" />
    </CustomTabs>
  );
};

ClientTabs.propTypes = {
  handleTabChange: PropTypes.func,
  tabValue: PropTypes.number,
};

export default ClientTabs;
