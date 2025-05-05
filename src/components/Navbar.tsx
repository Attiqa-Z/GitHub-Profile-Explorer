import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../api/search";

const Navbar = ({
  onSearch,
  toggleTheme,
}: {
  onSearch: (data: string) => void;
  toggleTheme: () => void;
}) => {
  const [name, setName] = React.useState("");
  const [search, setSearch] = React.useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () => searchUser(search),
    enabled: Boolean(search),
  });

  React.useEffect(() => {
    if (!isLoading && data?.items) {
      console.log(data?.items);
      onSearch(data.items);
    }
  }, [data, isLoading, onSearch]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "12px",
        backgroundColor: "#333",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <TextField
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search here..."
        sx={{
          width: "300px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      />
      <Button
        variant="contained"
        onClick={() => setSearch(name)}
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          px: 3,
          "&:hover": {
            backgroundColor: "#00bcd4",
          },
        }}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        onClick={toggleTheme}
        sx={{
          color: "#fff",
          borderColor: "#fff",
          fontWeight: "bold",
          borderRadius: "20px",
          px: 3,
          "&:hover": {
            borderColor: "#00bcd4",
            color: "#00bcd4",
          },
        }}
      >
        Toggle Theme
      </Button>
    </Box>
  );
};

export default Navbar;
