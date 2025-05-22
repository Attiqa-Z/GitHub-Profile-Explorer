import { Box, Typography } from "@mui/material";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 4,
        maxHeight: "0px",
        px: 2,
        bottom: 0,
        position: "fixed",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2">
        All Copyright &copy; {footerYear} reserved
      </Typography>
    </Box>
  );
};

export default Footer;
