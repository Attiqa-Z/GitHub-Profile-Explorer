import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import MuiCard from "../components/MuiCard";
const SearchResult = () => {
  const { username } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        const response = await fetch(
          `https://api.github.com/search/users?q=${username}`
        );
        const data = await response.json();
        if (data.items) {
          setUsers(data.items);
        } else {
          setUsers([]);
          setError("No users found.");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error fetching data");
      }
    };

    fetchUsers();
  }, [username]);

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : users.length > 0 ? (
          users.map((user) => (
        <MuiCard key={user.id} user={user} />
          ))
        ) : (
          <Typography sx={{ mt: 4 }}>Loading...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchResult;
