import { useState } from "react";
import Navbar from "../components/Navbar";
import MuiCard from "../components/MuiCard";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const [users, setUsers] = useState<any[]>([]);

  const handleSearchResults = (data: any) => {
    setUsers(data); 
  };

  return (
    <Box>

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
          <Typography>No users found. Searching for a different name.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

