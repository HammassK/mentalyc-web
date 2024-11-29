import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import { layoutStyles } from "../styles/layoutStyles";

const MainLayoutRoot = styled("div")(() => ({
  backgroundColor: "#ffffff",
  width: "100vw",
  height: "100vh",
}));
const MainLayout = ({ children }) => {
  const { rootLayoutContainer, subLayoutContainer } = layoutStyles;
  return (
    <MainLayoutRoot>
      <Box sx={rootLayoutContainer}>
        <Box sx={subLayoutContainer}>{children}</Box>
      </Box>
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
