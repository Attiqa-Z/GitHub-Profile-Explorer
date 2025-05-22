import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/Search";
import { useMatch } from "react-router-dom";
import Footer from "../components/Footer";
import SearchResult from "../components/SearchResult";

const HomePage = () => {
  const isHomePage = useMatch({ path: "/", end: true });
  const [users, setUsers] = useState<any[]>([]);

  const navigate = useNavigate();
  // Update user list based on search
  const handleSearchResults = (username: string) => {
    if (username.trim()) {
      navigate(`/search/${username}`);
    }
  };

  return (
    <Box>
      {/* Search Bar */}
      <Box>{isHomePage && <SearchBar onSearch={handleSearchResults} />}</Box>
      {/* User Cards */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={8}>
        {users.length > 0 ? (
          users.map((user) => (
            <SearchResult
              key={user.id}
              user={{
                id: user.id,
                login: user.login,
                avatar_url: user.avatar_url,
              }}
            />
            // <MuiCard
            //   key={user.id}
            //   user={{
            //     id: user.id,
            //     login: user.login,
            //     avatar_url: user.avatar_url,
            //   }}
            // />
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

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, TextField, Button, Typography } from "@mui/material";
// import Footer from "../components/Footer";

// const HomePage = () => {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (username.trim()) {
//       navigate(`/search/${username}`);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <Typography variant="h4" sx={{ mb: 3 }}>
//         GitHub User Search
//       </Typography>
//       <Box display="flex" gap={2}>
//         <TextField
//           label="Enter GitHub Username"
//           variant="outlined"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <Button variant="contained" onClick={handleSearch}>
//           Search
//         </Button>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default HomePage;
