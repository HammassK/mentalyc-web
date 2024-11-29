const layoutStyles = {
  rootLayoutContainer: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100vh",
  },
  subLayoutContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
};

const navbarStyles = {
  navbarContainer: {
    height: "65px",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  navbarSubContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: "100%",
    width: "85%",
    maxWidth: "1440px",
  },
  appLogoContainer: {
    width: "90px",
    display: "flex",
    height: "45%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  navLinksContainer: {
    display: "flex",
    alignItems: "center",
    gap: "44px",
    height: "100%",
  },
  navLinkText: {
    display: "flex",
    alignItems: "start",
    height: "55%",
    alignSelf: "end",
  },
  notesContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  notesText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#707070",
  },
  navAvatar: {
    backgroundColor: "#D6E4F4",
    width: "44px",
    height: "44px",
    marginRight: "10px",
    color: "#040404",
  },
  avatarText: {
    fontWeight: 400,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export { layoutStyles, navbarStyles };
