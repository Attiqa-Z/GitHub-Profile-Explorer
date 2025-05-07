import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MuiCard from "../components/MuiCard";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/Search"; 
import { IconButton } from '@mui/material';
import { DarkMode, LightMode} from "@mui/icons-material";
const HomePage = () => {
  const [users, setUsers] = useState<any[]>([]);

  // Restore theme preference from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  // Update user list based on search
  const handleSearchResults = (data: any[]) => {
    setUsers(data);
  };

  return (
    <Box>
       <Navbar />
      {/* Uncomment for future theme toggle feature */}
      
      {/* <IconButton
        onClick={() => setDarkMode(!darkMode)}
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
        {darkMode ? <LightMode /> : <DarkMode/>}
      </IconButton> */}
     

      {/* Navbar */}
     

      {/* Search Bar */}
      <Box>
        <SearchBar onSearch={handleSearchResults} />
      </Box>

      {/* User Cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={8}>
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
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
              padding: "12px 20px",
              borderRadius: "10px",
              marginTop: "40px",
              textAlign: "center",
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
