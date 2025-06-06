import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import * as React from "react";

interface NavbarProps {
  onSearch: (data: any[]) => void;
  title?: string;
}
const Navbar: React.FC<NavbarProps> = ({
  title = "GitHub Profile Explorer",
}) => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        backgroundColor: "#333",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src="/images.png"
          alt="Logo"
          style={{ height: "20px", width: "20px" }}
        />
        <Typography variant="body1" color="white">
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Typography
          sx={{
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => handleButtonClick("/")}
        >
          Home
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            cursor: "pointer",
          }}
          // onClick={() => handleButtonClick("/about")}
          onClick={() => handleButtonClick("/About")}
        >
          About
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
