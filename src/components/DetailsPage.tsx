import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress, Stack, Avatar, Typography } from "@mui/material";

const DetailsPage = () => {
  const { user:username } = useParams();
  const [userData, setuserData] = useState<any>(null);
  const [loading, setloading] = useState(true);

useEffect(() => {
  if (username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setuserData (response.data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error to find this", error);
      })
      .finally(() => {
        setloading(true); 
      });
  }
}, [username]);


if (loading) {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading user data..
        </Typography>
      </Stack>
  );
}
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