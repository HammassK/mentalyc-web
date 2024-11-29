import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { navbarStyles } from "../styles/layoutStyles";
import AppLogo from "../assets/svgs/navbar/appLogo";
import ProIcon from "../assets/svgs/navbar/proIcon";
import { NavLinks } from "../utils/constants";
import EarnIcon from "../assets/svgs/navbar/earnIcon";
import SuperButton from "../assets/svgs/navbar/superButton";
import { useState } from "react";
import ArrowDown from "../assets/svgs/navbar/arrowDown";
import NotesIcon from "../assets/svgs/navbar/notesIcon";
import InfoIcon from "../assets/svgs/navbar/infoIcon";

const MainNavBar = () => {
  const {
    navbarContainer,
    navbarSubContainer,
    appLogoContainer,
    navLinksContainer,
    navLinkText,
    notesContainer,
    notesText,
    navAvatar,
    avatarText,
  } = navbarStyles;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={navbarContainer}>
      <Box sx={navbarSubContainer}>
        <Box sx={appLogoContainer}>
          <AppLogo />
          <ProIcon />
        </Box>
        <Box sx={navLinksContainer}>
          {NavLinks.map((item, index) => (
            <Typography
              key={index}
              sx={{
                ...navLinkText,
                color: item?.name === "Clients" ? "#731054" : "#707070",
                fontWeight: item?.name === "Clients" ? "700" : "400",
                borderBottom:
                  item?.name === "Clients"
                    ? "4px solid #731054"
                    : "4px solid #ffffff",
              }}
            >
              {item?.name}
            </Typography>
          ))}

          <EarnIcon />
        </Box>
        <Box sx={notesContainer}>
          <NotesIcon />
          <Typography sx={notesText}>12 notes left</Typography>
          <InfoIcon />
          <SuperButton />
          <IconButton
            onClick={handleAvatarClick}
            sx={{
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Avatar sx={navAvatar}>
              <Typography sx={avatarText}>M</Typography>
            </Avatar>
            <ArrowDown />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default MainNavBar;
