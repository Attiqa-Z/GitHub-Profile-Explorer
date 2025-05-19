import { useState } from "react";
import MuiCard from "../components/MuiCard";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/Search";
import { useMatch } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const isHomePage = useMatch({ path: "/", end: true });
  const [users, setUsers] = useState<any[]>([]);

  // Update user list based on search
  const handleSearchResults = (data: any[]) => {
    setUsers(data);
  };

  return (
    <Box>
      {/* Search Bar */}
      <Box>{isHomePage && <SearchBar onSearch={handleSearchResults} />}</Box>
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
      <Footer />
    </Box>
  );
};

export default HomePage;
