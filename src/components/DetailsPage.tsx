import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  Stack, Avatar, Typography } from "@mui/material";

const DetailsPage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          setUserData(response.data);
          setLoading(false);
        }) 
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        })
      .finally(() => setLoading(false)); 
    };

  }, [username]);


  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

return (
  <Stack spacing={2} sx={{ padding: "20px", textAlign: "center" }}>
    <Avatar src={userData?.avatar_url} alt={userData?.login} sx={{ width: 100, height: 100, margin: "auto" }} />
    <Typography variant="h5">{userData?.name || userData?.login}</Typography>
    <Typography variant="body1">Bio: {userData?.bio || "No bio available"}</Typography>
    <Typography variant="body1">Followers: {userData?.followers}</Typography>
    <Typography variant="body1">Following: {userData?.following}</Typography>
    <Typography variant="body1">Repositories: {userData?.public_repos}</Typography>
  </Stack>
);
}
export default DetailsPage;