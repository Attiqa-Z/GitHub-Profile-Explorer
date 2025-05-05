import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MuiCard from "../components/MuiCard";
import { Box, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const HomePage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  const handleSearchResults = (data: any) => {
    setUsers(data);
  };

  return (
    <Box>
      {/* Theme Toggle Button in top-right */}
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: "fixed",
          top: 10,
          right: 10,
          zIndex: 1100,
          backgroundColor: "#eee",
          "&:hover": {
            backgroundColor: "#ccc",
          },
        }}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Navbar onSearch={handleSearchResults} />

      <Box display="flex" flexWrap="wrap" justifyContent="center" marginTop="100px">
        {users.length > 0 ? (
          users.map((user) => (
            <MuiCard
              key={user.id}
              user={{
                id: user.id,
                login: user.login,
                avatar_url: user.avatar_url,
                repositories: Math.floor(Math.random() * 50),
              }}
            />
          ))
        ) : (
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              padding: "12px 20px",
              borderRadius: "10px",
              width: "fit-content",
              margin: "auto",
              mt: 3,
            }}
          >
            🤷‍♂️ No users found. Try searching for a different name.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
