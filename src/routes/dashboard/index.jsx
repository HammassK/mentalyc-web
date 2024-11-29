import { Box } from "@mui/material";
import HelpButton from "../../components/helpButton";
import MainLayout from "../../layout/mainLayout";
import { mainStyles } from "../../styles/mainStyles";
import ClientsSection from "../../components/clientsSection/clientsSection";

const Dashboard = () => {
  const { internalMainContainer } = mainStyles;
  return (
    <MainLayout>
      <Box sx={internalMainContainer}>
        <HelpButton />
        <ClientsSection />
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
