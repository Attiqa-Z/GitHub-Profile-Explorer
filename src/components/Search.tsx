import { useState } from "react";
import { Box, Button, InputBase } from "@mui/material";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onSearch(trimmedInput); 
    }
  };

  const handleClear = () => {
    setInput("");
    onSearch(""); // Optional: notify parent to clear results
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            flexGrow: 1,
            padding: "8px 12px",
            backgroundColor: "#e4e7ec",
            borderRadius: 0,
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1e232e",
            color: "white",
            fontWeight: "bold",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#d9dce0",
              color: "black",
            },
          }}
        >
          GO
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
};

export default SearchBar;
