import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { searchUser } from "../api/search";
const Navbar = () => {
  const [name, setName] = React.useState("")
  const [search, setSearch] = React.useState("")
  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () => searchUser(search),
    enabled:Boolean(search)
  });

  React.useEffect(() => {
    console.log(data?.items);
  }, [isLoading]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "4px",
        margin: "20px",
        top: "50px",
        position: "fixed",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        placeholder="Search Here"
        style={{
          width: "300px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <Button
        variant="outlined"
        onClick={()=>{setSearch(name)}}
        disableRipple
        disableElevation
        style={{
          // textTransform: 'none',
          padding: "6px 16px",
          backgroundColor: "#1976d2",
          color: "#fff",
        }}
      >
        Button
      </Button>
    </Box>
  );
};

export default Navbar;
