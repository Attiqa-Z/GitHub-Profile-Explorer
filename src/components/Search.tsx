import { useState, useEffect } from "react";
import { Box, Button, InputBase } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../api/search";

interface SearchBarProps {
  onSearch: (data: User[]) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchUser(query),
    enabled: Boolean(query),
  });

  useEffect(() => {
    if (!isLoading && data?.items) {
      onSearch(data.items);
    }
  }, [data, isLoading, onSearch]);

  const handleGo = () => {
    setQuery(text.trim());
  };

  const handleClear = () => {
    setText("");
    setQuery("");
    onSearch([]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: "8px",
        position: "absolute",
        width: "100%",
        top: "100px",
        maxWidth: "500px",
        zIndex: 1000,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#e4e7ec",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <InputBase
          placeholder="Search here."
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            flexGrow: 1,
            padding: "8px 12px",
            backgroundColor: "#e4e7ec",
            borderRadius: 0,
          }}
        />

        <Button
          onClick={handleGo}
          variant="contained"
          disabled={isLoading}
          sx={{
            backgroundColor: "#1e232e",
            color: "white",
            borderRight: "1px solid white",
            fontWeight: "bold",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#d9dce0",
              color: "black",
            },
          }}
        >
          {isLoading ? "Searching.." : "GO"}
        </Button>

        <Button
          onClick={handleClear}
          sx={{
            color: "white",
            fontWeight: "bold",
            borderRadius: 0,
            backgroundColor: "#1e232e",
            "&:hover": {
              backgroundColor: "#d9dce0",
              color: "black",
            },
          }}
        >
          CLEAR
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
